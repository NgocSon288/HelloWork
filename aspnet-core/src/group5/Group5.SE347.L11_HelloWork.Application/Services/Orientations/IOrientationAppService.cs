using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group5.SE347.L11_HelloWork.Application.Services.Orientations.Dto;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.Orientations
{
    public interface IOrientationAppService : IApplicationService
    {
        Task<ListResultDto<OrientationDto>> GetOrientationAsync(EntityDto<int> input);
        Task<OrientationDto> CreateOrientationAsync(CreateOrientationDto input);
        Task<OrientationDto> UpdateOrientationAsync(UpdateOrientationDto input);
        Task DeleteOrientationAsync(EntityDto<int> input);
    }
}