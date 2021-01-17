using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Group5.SE347.L11_HelloWork.Application.Services.StateApplicants.Dto;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.StateApplicants
{
    public class StateApplicantAppService : Group5AppServiceBase, IStateApplicantAppService
    {
        private readonly IRepository<StateApplicant> _stateApplicantRepo;

        public StateApplicantAppService(IRepository<StateApplicant> stateApplicantRepo)
        {
            _stateApplicantRepo = stateApplicantRepo;
        }

        [AbpAllowAnonymous]
        public async Task<StateApplicantDto> CreateStateApplicantAsync(CreateStateApplicantDto input)
        {
            var stateApplicant = ObjectMapper.Map<StateApplicant>(input);
            stateApplicant = await _stateApplicantRepo.InsertAsync(stateApplicant);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<StateApplicantDto>(stateApplicant);
        }

        [AbpAllowAnonymous]
        public async Task<StateApplicantDto> GetStateApplicantAsync(EntityDto<int> input)
        {
            var stateApplicant = await _stateApplicantRepo.GetAsync(input.Id);
            return ObjectMapper.Map<StateApplicantDto>(stateApplicant);
        }

        [AbpAllowAnonymous]
        public async Task<StateApplicantDto> GetStateApplicantByJSAsync(GetStateApplicantByJSInput input)
        {
            var stateApplicant = await _stateApplicantRepo.GetAllListAsync(s => s.IDJobSeeker == input.IdJobSeeker && s.IDRecruitment == input.IdRecruitment);
            if (stateApplicant != null)
                return ObjectMapper.Map<StateApplicantDto>(stateApplicant[0]);
            else
            {
                var temp = await _stateApplicantRepo.GetAsync(-1);
                return ObjectMapper.Map<StateApplicantDto>(temp);
            }
        }

        [AbpAllowAnonymous]
        public async Task<StateApplicantDto> UpdateStateApplicantAsync(UpdateStateApplicantDto input)
        {
            var stateApplicant = await _stateApplicantRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, stateApplicant);
            var savedStateApplicant = await _stateApplicantRepo.UpdateAsync(stateApplicant);
            return ObjectMapper.Map<StateApplicantDto>(savedStateApplicant);
        }
        [AbpAllowAnonymous]
        public async Task DeleteStateApplicantAsync(EntityDto<int> input)
        {
            await _stateApplicantRepo.DeleteAsync(input.Id);
        }
    }
}
