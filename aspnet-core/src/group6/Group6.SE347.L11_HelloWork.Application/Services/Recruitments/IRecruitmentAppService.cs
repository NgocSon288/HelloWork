using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group6.SE347.L11_HelloWork.Application.Services.Recruitments.Dto;
using System.Threading.Tasks;

namespace Group6.SE347.L11_HelloWork.Application.Services.Recruitments
{
    public interface IRecruitmentAppService : IApplicationService
    {
        Task<RecruitmentDto> CreateRecruitmentAsync(CreateRecruitmentDto input);
        Task<GetRecruitmentDto> GetRecruitmentAsync(EntityDto<int> input);
        Task<RecruitmentDto> UpdateRecruitmentAsync(UpdateRecruitmentDto input);
        Task<SavedRecruitmentDto> CreateSavedRecruitmentAsync(CreateSavedRecruitmentDto input);
    }
}
