using Abp.AspNetCore.Mvc.Controllers;
using Group5.SE347.L11_HelloWork.Application;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Group5.SE347.L11_HelloWork.Application.Services.Interviews.Dto;
using Group5.SE347.L11_HelloWork.Application.Services.Interviews;
using Abp.Domain.Entities;
using Abp.Application.Services.Dto;
using System;

namespace Group5.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class InterviewsController : AbpController
    {
        private readonly IInterviewAppService _interviewAppService;

        public InterviewsController(IInterviewAppService interviewAppService)
        {
            _interviewAppService = interviewAppService;
        }

        [HttpGet("{id}", Name = "GetInterview")]
        public async Task<InterviewDto> Get(int id)
        {
            return await _interviewAppService.GetInterviewAsync(new EntityDto<int>(id));
        }

        [HttpPut]
        public async Task<InterviewDto> GetByJS(GetInterviewByJSInput input)
        {
            return await _interviewAppService.GetInterviewByJSAsync(input);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateInterviewDto input)
        {
            var newInterview = await _interviewAppService.CreateInterviewAsync(input);
            return CreatedAtRoute("GetInterview", new { id = newInterview.Id }, newInterview);
        }

        [HttpPut]
        public async Task<InterviewDto> Update(UpdateInterviewDto input)
        {
            return await _interviewAppService.UpdateInterviewAsync(input);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _interviewAppService.DeleteInterviewAsync(new EntityDto<int>(id));
            return NoContent();
        }
    }
}
