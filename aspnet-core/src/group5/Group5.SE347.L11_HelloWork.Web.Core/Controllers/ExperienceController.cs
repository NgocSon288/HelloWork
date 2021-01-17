using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group5.SE347.L11_HelloWork.Application.Services.Experiences;
using Group5.SE347.L11_HelloWork.Application.Services.Experiences.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
namespace Group5.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ExperienceController : AbpController
    {
        private readonly IExperienceAppService _experienceAppService;

        public ExperienceController(IExperienceAppService experienceAppService)
        {
            _experienceAppService = experienceAppService;
        }

        [HttpGet("{id}", Name = "GetExperience")]
        public async Task<ListResultDto<ExperienceDto>> Get(int id)
        {
            return await _experienceAppService.GetExperienceAsync(new EntityDto<int>(id));
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateExperienceDto input)
        {
            var newExperience = await _experienceAppService.CreateExperienceAsync(input);
            return CreatedAtRoute("GetExperience", new { id = newExperience.Id }, newExperience);
        }

        [HttpPut]
        public async Task<ExperienceDto> Update(UpdateExperienceDto input)
        {
            return await _experienceAppService.UpdateExperienceAsync(input);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _experienceAppService.DeleteExperienceAsync(new EntityDto<int>(id));
            return NoContent();
        }
    }
}
