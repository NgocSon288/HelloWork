using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group5.SE347.L11_HelloWork.Application.Services.Skills.Dto;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.Skills
{
    public interface ISkillAppService : IApplicationService
    {
        Task<ListResultDto<SkillDto>> GetSkillAsync(EntityDto<int> input);
        Task<SkillDto> CreateSkillAsync(CreateSkillDto input);
        Task<SkillDto> UpdateSkillAsync(UpdateSkillDto input);
        Task DeleteSkillAsync(EntityDto<int> input);
    }
}