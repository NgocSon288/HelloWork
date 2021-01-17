using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Collections.Extensions;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Group12.SE347.L11_HelloWork.Application.Services.SearchCandidate.Dto;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Group12.SE347.L11_HelloWork.Application.Services.SearchCandidate
{
    public class SearchCandidateAppService : Group12AppServiceBase, ISearchCandidateAppService
    {
        private readonly IRepository<JobSeeker> _jobSeekerRepo;
        private readonly IRepository<Orientation> _orientationRepo;
        private readonly IRepository<Review> _reviewRepo;
        private readonly IRepository<Skill> _skillRepo;

        public SearchCandidateAppService(
            IRepository<JobSeeker> jobSeekerRepo,
            IRepository<Orientation> orientationRepo,
            IRepository<Review> reviewRepo,
            IRepository<Skill> skillRepo)
        {
            _jobSeekerRepo = jobSeekerRepo;
            _orientationRepo = orientationRepo;
            _reviewRepo = reviewRepo;
            _skillRepo = skillRepo;
        }

        [AbpAllowAnonymous]
        public async Task<ListResultDto<CandidateInfoDto>> GetCandidates(CandidateFilterDto input)
        {
            var jobSeekerQuery = _jobSeekerRepo.GetAll();
            var orientationQuery = _orientationRepo.GetAll();
            var reviewQuery = _reviewRepo.GetAll();
            var skillQuery = _skillRepo.GetAll();

            var query = from j in jobSeekerQuery
            join o in orientationQuery on j.Id equals o.IDJobSeeker into orientation
            from o in orientation.DefaultIfEmpty()
            join r in reviewQuery on j.Id equals r.IDJobSeeker into review
            from r in review.DefaultIfEmpty()
            join s in skillQuery on j.Id equals s.IDJobSeeker into skill
            from s in skill.DefaultIfEmpty()
            select new {
                jobSeeker = j, orientation = o, review = r, skill = s
            };

            var list = await query.Distinct().ToListAsync();

            var filteredList = list
                .WhereIf(!input.Expertise.IsNullOrWhiteSpace(), q => q.jobSeeker.Expertise.ToLower() == input.Expertise.ToLower())
                .WhereIf(input.MinAge.HasValue, q => q.jobSeeker.Birthday.HasValue)
                .WhereIf(input.MinAge.HasValue, q => DateTime.Now.Year - q.jobSeeker.Birthday.Value.Year >= input.MinAge.Value)
                .WhereIf(input.MaxAge.HasValue, q => q.jobSeeker.Birthday.HasValue)
                .WhereIf(input.MaxAge.HasValue, q => DateTime.Now.Year - q.jobSeeker.Birthday.Value.Year <= input.MaxAge.Value)
                .WhereIf(!input.Operation.IsNullOrWhiteSpace(), q => q.orientation.OrientationName.ToLower() == input.Operation.ToLower())
                .WhereIf(!input.Province.IsNullOrWhiteSpace(), q => q.jobSeeker.Address.ToLower().Contains(input.Province.ToLower()))
                .WhereIf(input.Rating.HasValue, q => q.review.RatingStar >= input.Rating)
                .WhereIf(!input.Skills.IsNullOrEmpty(), q => input.Skills.Select(x => x.ToLower()).Contains(q.skill.SkillName.ToLower()))
                .GroupBy(q => q.jobSeeker.Id)
                .Select(q => q.First());

            var candidatesList = filteredList.Select(q => new CandidateInfoDto() {
                Id = q.jobSeeker.Id,
                Name = q.jobSeeker.Name,
                Address = q.jobSeeker.Address,
                Age = DateTime.Now.Year - q.jobSeeker.Birthday.Value.Year,
                Expertise = q.jobSeeker.Expertise,
                Operation = q.orientation.OrientationName,
                Rating = q.review.RatingStar.Value,
                Skills = skillQuery.Where(s => s.IDJobSeeker == q.jobSeeker.Id).Select(s => s.SkillName).ToList(),
            })
            .OrderByDescending(q => q.Rating);

            return new ListResultDto<CandidateInfoDto>(candidatesList.ToList());

        }

    }
}
