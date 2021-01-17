using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group12.SE347.L11_HelloWork.Application.Services.SearchJobs.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group12.SE347.L11_HelloWork.Application.Services.SearchJobs
{
    public interface ISearchJobsAppService : IApplicationService
    {
        Task<ListResultDto<JobResultDto>> GetJobsByFilterAsync(JobFilterDto input);
    }
}
