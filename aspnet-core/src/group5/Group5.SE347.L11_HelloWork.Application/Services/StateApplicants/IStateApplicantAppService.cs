using Abp.Application.Services;
using SE347.L11_HelloWork.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using Group5.SE347.L11_HelloWork.Application.Services.StateApplicants.Dto;
using Abp.Application.Services.Dto;

namespace Group5.SE347.L11_HelloWork.Application.Services.StateApplicants
{
    public interface IStateApplicantAppService : IApplicationService
    {
        Task<StateApplicantDto> CreateStateApplicantAsync(CreateStateApplicantDto input);
        Task<StateApplicantDto> GetStateApplicantAsync(EntityDto<int> input);
        Task<StateApplicantDto> GetStateApplicantByJSAsync(GetStateApplicantByJSInput input);
        Task<StateApplicantDto> UpdateStateApplicantAsync(UpdateStateApplicantDto input);
        Task DeleteStateApplicantAsync(EntityDto<int> input);
    }
}
