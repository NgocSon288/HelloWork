using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group0;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group0.SE347.L11_HelloWork.Application.Services.DemoService1
{
    public class DemoService1AppService : Group0AppServiceBase, IDemoService1AppService
    {
        private readonly IRepository<JobType> _jobTypeRepo;

        public DemoService1AppService(IRepository<JobType> jobTypeRepo)
        {
            _jobTypeRepo = jobTypeRepo;
        }

        [AbpAuthorize(PermissionNames.Pages_Group8_Comment)]
        public async Task<IEnumerable<JobType>> GetJobTypes()
        {
            var jobTypes = await _jobTypeRepo.GetAllListAsync();
            var jobTypesToReturn =  ObjectMapper.Map<IEnumerable<JobType>>(jobTypes);
            return jobTypesToReturn;
        }
    }
}
