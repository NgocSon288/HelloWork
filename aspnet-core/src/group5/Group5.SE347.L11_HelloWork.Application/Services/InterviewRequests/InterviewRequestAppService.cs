using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Group5.SE347.L11_HelloWork.Application.Services.InterviewRequests.Dto;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.InterviewRequests
{
    public class InterviewRequestAppService : Group5AppServiceBase, IInterviewRequestAppService
    {
        private readonly IRepository<InterviewRequest> _interviewRequestRepo;

        public InterviewRequestAppService(IRepository<InterviewRequest> interviewRequestRepo)
        {
            _interviewRequestRepo = interviewRequestRepo;
        }

        [AbpAllowAnonymous]
        public async Task<ListResultDto<InterviewRequestDto>> GetInterviewRequestAsync(EntityDto<int> input)
        {
            var interviewRequests = await _interviewRequestRepo.GetAllListAsync(ir => ir.IDInterview == input.Id);
            return new ListResultDto<InterviewRequestDto>(
                interviewRequests.Select(a => ObjectMapper.Map<InterviewRequestDto>(a)).ToList()
                );
        }

        [AbpAllowAnonymous]
        public async Task<InterviewRequestDto> CreateInterviewRequestAsync(CreateInterviewRequestDto input)
        {
            var interviewRequest = ObjectMapper.Map<InterviewRequest>(input);
            interviewRequest = await _interviewRequestRepo.InsertAsync(interviewRequest);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<InterviewRequestDto>(interviewRequest);
        }
        [AbpAllowAnonymous]
        public async Task<InterviewRequestDto> UpdateInterviewRequestAsync(UpdateInterviewRequestDto input)
        {
            var interviewRequest = await _interviewRequestRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, interviewRequest);
            var savedInterviewRequest = await _interviewRequestRepo.UpdateAsync(interviewRequest);
            return ObjectMapper.Map<InterviewRequestDto>(savedInterviewRequest);
        }
        [AbpAllowAnonymous]
        public async Task DeleteInterviewRequestAsync(EntityDto<int> input)
        {
            await _interviewRequestRepo.DeleteAsync(input.Id);
        }
    }
}
