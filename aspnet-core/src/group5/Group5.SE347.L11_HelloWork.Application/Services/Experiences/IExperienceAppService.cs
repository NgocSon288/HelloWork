using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group5.SE347.L11_HelloWork.Application.Services.Experiences.Dto;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.Experiences
{
    public interface IExperienceAppService : IApplicationService
    {
        Task<ListResultDto<ExperienceDto>> GetExperienceAsync(EntityDto<int> input);
        Task<ExperienceDto> CreateExperienceAsync(CreateExperienceDto input);
        Task<ExperienceDto> UpdateExperienceAsync(UpdateExperienceDto input);
        Task DeleteExperienceAsync(EntityDto<int> input);
    }
}