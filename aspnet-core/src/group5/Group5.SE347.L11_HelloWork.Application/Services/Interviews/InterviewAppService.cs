using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Group5.SE347.L11_HelloWork.Application.Services.Interviews.Dto;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.Interviews
{
    public class InterviewAppService : Group5AppServiceBase, IInterviewAppService
    {
        private readonly IRepository<Interview> _interviewRepo;

        public InterviewAppService(IRepository<Interview> interviewRepo)
        {
            _interviewRepo = interviewRepo;
        }

        [AbpAllowAnonymous]
        public async Task<InterviewDto> CreateInterviewAsync(CreateInterviewDto input)
        {
            var interview = ObjectMapper.Map<Interview>(input);
            interview = await _interviewRepo.InsertAsync(interview);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<InterviewDto>(interview);
        }

        [AbpAllowAnonymous]
        public async Task<InterviewDto> GetInterviewAsync(EntityDto<int> input)
        {
            var interview = await _interviewRepo.GetAsync(input.Id);
            return ObjectMapper.Map<InterviewDto>(interview);
        }

        [AbpAllowAnonymous]
        public async Task<InterviewDto> GetInterviewByJSAsync(GetInterviewByJSInput input)
        {
            var interview = await _interviewRepo.GetAllListAsync(i => i.IDJobSeeker == input.IdJobSeeker && i.IDRecruitment == input.IdRecruitment);
            return ObjectMapper.Map<InterviewDto>(interview[0]);
        }

        [AbpAllowAnonymous]
        public async Task<InterviewDto> UpdateInterviewAsync(UpdateInterviewDto input)
        {
            var interview = await _interviewRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, interview);
            var savedInterview = await _interviewRepo.UpdateAsync(interview);
            return ObjectMapper.Map<InterviewDto>(savedInterview);
        }
        [AbpAllowAnonymous]
        public async Task DeleteInterviewAsync(EntityDto<int> input)
        {
            await _interviewRepo.DeleteAsync(input.Id);
        }
    }
}
