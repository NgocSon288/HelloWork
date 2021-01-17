using Abp.AspNetCore.Mvc.Controllers;
using Group5.SE347.L11_HelloWork.Application;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Group5.SE347.L11_HelloWork.Application.Services.JobSeekers.Dto;
using Group5.SE347.L11_HelloWork.Application.Services.JobSeekers;
using Abp.Domain.Entities;
using Abp.Application.Services.Dto;
using System;

namespace Group5.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class JobSeekersController : AbpController
    {
        private readonly IJobSeekerAppService _jobSeekerAppService;

        public JobSeekersController(IJobSeekerAppService jobSeekerAppService)
        {
            _jobSeekerAppService = jobSeekerAppService;
        }

        [HttpGet("{id}", Name = "GetJobSeeker")]
        public async Task<JobSeekerDto> Get(int id)
        {
            return await _jobSeekerAppService.GetJobSeekerAsync(new EntityDto<int>(id));
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateJobSeekerInputDto input)
        {
            var newJobSeeker = await _jobSeekerAppService.CreateJobSeekerAsync(input);
            return CreatedAtRoute("GetJobSeeker", new { id = newJobSeeker.Id}, newJobSeeker);
        }

        [HttpPut]
        public async Task<JobSeekerDto> Update(UpdateJobSeekerDto input)
        {
            return await _jobSeekerAppService.UpdateJobSeekerAsync(input);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _jobSeekerAppService.DeleteJobSeekerAsync(new EntityDto<int>(id));
            return NoContent();
        }

        [HttpGet("{id}", Name = "GetJobSeekerShort")]
        public async Task<JobSeekerShortDto> GetShort(int id)
        {
            return await _jobSeekerAppService.GetJobSeekerShortAsync(new EntityDto<int>(id));
        }
    }
}
