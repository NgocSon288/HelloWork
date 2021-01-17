using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group5.SE347.L11_HelloWork.Application.Services.InterviewRequests.Dto;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.InterviewRequests
{
    public interface IInterviewRequestAppService : IApplicationService
    {
        Task<ListResultDto<InterviewRequestDto>> GetInterviewRequestAsync(EntityDto<int> input);
        Task<InterviewRequestDto> CreateInterviewRequestAsync(CreateInterviewRequestDto input);
        Task<InterviewRequestDto> UpdateInterviewRequestAsync(UpdateInterviewRequestDto input);
        Task DeleteInterviewRequestAsync(EntityDto<int> input);
    }
}
