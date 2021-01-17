using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group1.SE347.L11_HelloWork.Application.Services.RecruiterService
{
    public class RecruiterAppService : Group1AppServiceBase, IRecruiterAppService
    {
        private readonly IRepository<Recruiter> _RecruiterRepo;

        public RecruiterAppService(IRepository<Recruiter> recruiterRepo)
        {
            _RecruiterRepo = recruiterRepo;
        }

        [AbpAllowAnonymous]
        public async Task<RecruiterDto> GetRecuiter(EntityDto<int> input)
        {
            var recruiter = await _RecruiterRepo.GetAsync(input.Id);
            return new RecruiterDto(recruiter);
        }
    }
}
