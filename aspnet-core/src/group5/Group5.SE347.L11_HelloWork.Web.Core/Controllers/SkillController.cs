using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group5.SE347.L11_HelloWork.Application.Services.Skills;
using Group5.SE347.L11_HelloWork.Application.Services.Skills.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SkillController : AbpController
    {
        private readonly ISkillAppService _skillAppService;

        public SkillController(ISkillAppService skillAppService)
        {
            _skillAppService = skillAppService;
        }

        [HttpGet("{id}", Name = "GetSkill")]
        public async Task<ListResultDto<SkillDto>> Get(int id)
        {
            return await _skillAppService.GetSkillAsync(new EntityDto<int>(id));
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateSkillDto input)
        {
            var newSkill = await _skillAppService.CreateSkillAsync(input);
            return CreatedAtRoute("GetSkill", new { id = newSkill.Id }, newSkill);
        }

        [HttpPut]
        public async Task<SkillDto> Update(UpdateSkillDto input)
        {
            return await _skillAppService.UpdateSkillAsync(input);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _skillAppService.DeleteSkillAsync(new EntityDto<int>(id));
            return NoContent();
        }
    }
}
