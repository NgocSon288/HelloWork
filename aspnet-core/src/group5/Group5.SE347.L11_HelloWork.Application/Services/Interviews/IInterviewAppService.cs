using Abp.Application.Services;
using SE347.L11_HelloWork.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using Group5.SE347.L11_HelloWork.Application.Services.Interviews.Dto;
using Abp.Application.Services.Dto;

namespace Group5.SE347.L11_HelloWork.Application.Services.Interviews
{
    public interface IInterviewAppService : IApplicationService
    {
        Task<InterviewDto> CreateInterviewAsync(CreateInterviewDto input);
        Task<InterviewDto> GetInterviewAsync(EntityDto<int> input);
        Task<InterviewDto> GetInterviewByJSAsync(GetInterviewByJSInput input);
        Task<InterviewDto> UpdateInterviewAsync(UpdateInterviewDto input);
        Task DeleteInterviewAsync(EntityDto<int> input);
    }
}
