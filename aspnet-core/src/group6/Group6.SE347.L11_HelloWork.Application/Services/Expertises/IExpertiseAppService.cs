using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group6.SE347.L11_HelloWork.Application.Services.Expertises.Dto;
using System.Threading.Tasks;

namespace Group6.SE347.L11_HelloWork.Application.Services.Expertises
{
    public interface IExpertiseAppService : IApplicationService
    {
        Task<ExpertiseDto> CreateExpertiseAsync(CreateExpertiseDto input);
        Task<ListResultDto<ExpertiseDto>> GetExpertisesAsync();
        Task<ExpertiseDto> GetExpertiseAsync(EntityDto<int> input);
        Task DeleteExpertiseAsync(int id);
    }
}
