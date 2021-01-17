using Abp.Application.Services;
using SE347.L11_HelloWork.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using Group5.SE347.L11_HelloWork.Application.Services.StateApplications.Dto;
using Abp.Application.Services.Dto;

namespace Group5.SE347.L11_HelloWork.Application.Services.StateApplications
{
    public interface IStateApplicationAppService : IApplicationService
    {
        Task<StateApplicationDto> CreateStateApplicationAsync(CreateStateApplicationDto input);
        Task<StateApplicationDto> GetStateApplicationAsync(EntityDto<int> input);
        Task<StateApplicationDto> GetStateApplicationByJSAsync(GetStateApplicationByJSInput input);
        Task<StateApplicationDto> UpdateStateApplicationAsync(UpdateStateApplicationDto input);
        Task DeleteStateApplicationAsync(EntityDto<int> input);
    }
}
