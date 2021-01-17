using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group5.SE347.L11_HelloWork.Application.Services.Achievements;
using Group5.SE347.L11_HelloWork.Application.Services.Achievements.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AchievementController : AbpController
    {
        private readonly IAchievementAppService _achievementAppService;

        public AchievementController(IAchievementAppService achievementAppService)
        {
            _achievementAppService = achievementAppService;
        }

        [HttpGet("{id}", Name = "GetAchievement")]
        public async Task<ListResultDto<AchievementDto>> Get(int id)
        {
            return await _achievementAppService.GetAchievementAsync(new EntityDto<int>(id));
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateAchievementDto input)
        {
            var newAchievement = await _achievementAppService.CreateAchievementAsync(input);
            return CreatedAtRoute("GetAchievement", new { id = newAchievement.Id }, newAchievement);
        }

        [HttpPut]
        public async Task<AchievementDto> Update(UpdateAchievementDto input)
        {
            return await _achievementAppService.UpdateAchievementAsync(input);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _achievementAppService.DeleteAchievementAsync(new EntityDto<int>(id));
            return NoContent();
        }
    }
}
