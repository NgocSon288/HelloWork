using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group5.SE347.L11_HelloWork.Application.Services.InterviewRequests;
using Group5.SE347.L11_HelloWork.Application.Services.InterviewRequests.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class InterviewRequestController : AbpController
    {
        private readonly IInterviewRequestAppService _interviewRequestAppService;

        public InterviewRequestController(IInterviewRequestAppService interviewRequestAppService)
        {
            _interviewRequestAppService = interviewRequestAppService;
        }

        [HttpGet("{id}", Name = "GetInterviewRequest")]
        public async Task<ListResultDto<InterviewRequestDto>> Get(int id)
        {
            return await _interviewRequestAppService.GetInterviewRequestAsync(new EntityDto<int>(id));
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateInterviewRequestDto input)
        {
            var newInterviewRequest = await _interviewRequestAppService.CreateInterviewRequestAsync(input);
            return CreatedAtRoute("GetInterviewRequest", new { id = newInterviewRequest.Id }, newInterviewRequest);
        }

        [HttpPut]
        public async Task<InterviewRequestDto> Update(UpdateInterviewRequestDto input)
        {
            return await _interviewRequestAppService.UpdateInterviewRequestAsync(input);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _interviewRequestAppService.DeleteInterviewRequestAsync(new EntityDto<int>(id));
            return NoContent();
        }
    }
}
