using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group12.SE347.L11_HelloWork.Application.Services.SearchJobs;
using Group12.SE347.L11_HelloWork.Application.Services.SearchJobs.Dto;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group12.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class JobsController: AbpController
    {
        private readonly ISearchJobsAppService _searchJobsAppService;

        public JobsController(ISearchJobsAppService searchJobsAppService)
        {
            _searchJobsAppService = searchJobsAppService;
        }

        [HttpPost]
        public async Task<ListResultDto<JobResultDto>> Get(JobFilterDto jobFilterDto)
        {
            return await _searchJobsAppService.GetJobsByFilterAsync(jobFilterDto);
        }
    }
}
