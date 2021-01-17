using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group5.SE347.L11_HelloWork.Application.Services.Educations.Dto;
using System.Threading.Tasks;
namespace Group5.SE347.L11_HelloWork.Application.Services.Educations
{
    public interface IEducationAppService : IApplicationService
    {
        Task<ListResultDto<EducationDto>> GetEducationAsync(EntityDto<int> input);
        Task<EducationDto> CreateEducationAsync(CreateEducationDto input);
        Task<EducationDto> UpdateEducationAsync(UpdateEducationDto input);
        Task DeleteEducationAsync(EntityDto<int> input);
    }
}