using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group5.SE347.L11_HelloWork.Application.Services.Achievements.Dto;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.Achievements
{
    public interface IAchievementAppService : IApplicationService
    {
        Task<ListResultDto<AchievementDto>> GetAchievementAsync(EntityDto<int> input);
        Task<AchievementDto> CreateAchievementAsync(CreateAchievementDto input);
        Task<AchievementDto> UpdateAchievementAsync(UpdateAchievementDto input);
        Task DeleteAchievementAsync(EntityDto<int> input);
    }
}
