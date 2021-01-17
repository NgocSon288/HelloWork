using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Group5.SE347.L11_HelloWork.Application.Services.Achievements.Dto;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.Achievements
{
    public class AchievementAppService : Group5AppServiceBase, IAchievementAppService
    {
        private readonly IRepository<Achievement> _achievementRepo;

        public AchievementAppService(IRepository<Achievement> achievementRepo)
        {
            _achievementRepo = achievementRepo;
        }

        [AbpAllowAnonymous]
        public async Task<ListResultDto<AchievementDto>> GetAchievementAsync(EntityDto<int> input)
        {
            var achievements = await _achievementRepo.GetAllListAsync(achieve => achieve.IDJobSeeker == input.Id);
            return new ListResultDto<AchievementDto>(
                achievements.Select(a => ObjectMapper.Map<AchievementDto>(a)).ToList()
                );
        }

        [AbpAllowAnonymous]
        public async Task<AchievementDto> CreateAchievementAsync(CreateAchievementDto input)
        {
            var achievement = ObjectMapper.Map<Achievement>(input);
            achievement = await _achievementRepo.InsertAsync(achievement);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<AchievementDto>(achievement);
        }
        [AbpAllowAnonymous]
        public async Task<AchievementDto> UpdateAchievementAsync(UpdateAchievementDto input)
        {
            var achievement = await _achievementRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, achievement);
            var savedAchievement = await _achievementRepo.UpdateAsync(achievement);
            return ObjectMapper.Map<AchievementDto>(savedAchievement);
        }
        [AbpAllowAnonymous]
        public async Task DeleteAchievementAsync(EntityDto<int> input)
        {
            await _achievementRepo.DeleteAsync(input.Id);
        }
    }
}
