using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group5.SE347.L11_HelloWork.Application.Services.Educations;
using Group5.SE347.L11_HelloWork.Application.Services.Educations.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class EducationController : AbpController
    {
        private readonly IEducationAppService _educationAppService;

        public EducationController(IEducationAppService educationAppService)
        {
            _educationAppService = educationAppService;
        }

        [HttpGet("{id}", Name = "GetEducation")]
        public async Task<ListResultDto<EducationDto>> Get(int id)
        {
            return await _educationAppService.GetEducationAsync(new EntityDto<int>(id));
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateEducationDto input)
        {
            var newEducation = await _educationAppService.CreateEducationAsync(input);
            return CreatedAtRoute("GetEducation", new { id = newEducation.Id }, newEducation);
        }

        [HttpPut]
        public async Task<EducationDto> Update(UpdateEducationDto input)
        {
            return await _educationAppService.UpdateEducationAsync(input);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _educationAppService.DeleteEducationAsync(new EntityDto<int>(id));
            return NoContent();
        }
    }
}
