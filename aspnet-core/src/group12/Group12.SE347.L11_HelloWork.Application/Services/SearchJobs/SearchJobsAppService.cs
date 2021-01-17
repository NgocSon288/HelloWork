using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Group12.SE347.L11_HelloWork.Application.Services.SearchJobs.Dto;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using System.Linq.Dynamic;
using Abp.Collections.Extensions;
using Abp.Linq.Extensions;
using Abp.Extensions;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace Group12.SE347.L11_HelloWork.Application.Services.SearchJobs
{
    public class SearchJobsAppService : Group12AppServiceBase, ISearchJobsAppService
    {
        private readonly IRepository<Recruitment> _recruitmentRepository;
        private readonly IRepository<Recruiter> _recruiterRepository;
        private readonly IRepository<Company> _companyRepository;

        public SearchJobsAppService(IRepository<Recruitment> recruitmentRepository,
        IRepository<Recruiter> recruiterRepository,
        IRepository<Company> companyRepository)
        {
            _recruitmentRepository = recruitmentRepository;
            _recruiterRepository = recruiterRepository;
            _companyRepository = companyRepository;
        }

        public async Task<ListResultDto<JobResultDto>> GetJobsByFilterAsync(JobFilterDto input)
        {
            var query = _recruitmentRepository.GetAll()
                .Include(x => x.ExpertiseRecruitments).ThenInclude(x => x.Expertise)
                .WhereIf(!input.SalaryRange.IsNullOrWhiteSpace(), x => x.SalaryRange.ToLower() == input.SalaryRange.ToLower())
                .WhereIf(!input.WayOfWork.IsNullOrWhiteSpace(), x => x.WayOfWork.ToLower() == input.WayOfWork.ToLower())
                .WhereIf(!input.Name.IsNullOrWhiteSpace(), x => x.Name.ToLower().Contains(input.Name.ToLower()))
                .WhereIf(!input.State.IsNullOrWhiteSpace(), x => x.State.ToLower() == input.State.ToLower())
                .Join(_recruiterRepository.GetAll(), recruitment => recruitment.CreatorUserId, recruiter => recruiter.IDUser, (recruitment, recruiter) => new { recruitment, recruiter })
                .Join(_companyRepository.GetAll(), x => x.recruiter.IDCompany, company => company.Id, (x, company) => new { x.recruiter, x.recruitment, company})
                .WhereIf(!input.Province.IsNullOrWhiteSpace(), x => x.company.Address.ToLower().Contains(input.Province.ToLower()));
            
            var localList = await query.ToListAsync();
            var result = localList
                .WhereIf(!input.Expertises.IsNullOrEmpty(),
                    x => x.recruitment.ExpertiseRecruitments.Select(ept => ept.Expertise.Name.ToLower()).Intersect(input.Expertises.Select(i => i.ToLower())).Count() > 0)
                .Select( x => x.recruitment);
            return new ListResultDto<JobResultDto>(result.Select(x => ObjectMapper.Map<JobResultDto>(x)).ToList());
        }
    }
}
