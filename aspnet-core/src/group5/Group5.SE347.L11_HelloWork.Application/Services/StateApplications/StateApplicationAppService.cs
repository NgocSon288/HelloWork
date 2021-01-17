using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Group5.SE347.L11_HelloWork.Application.Services.StateApplications.Dto;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.StateApplications
{
    public class StateApplicationAppService : Group5AppServiceBase, IStateApplicationAppService
    {
        private readonly IRepository<StateApplication> _stateApplicationRepo;

        public StateApplicationAppService(IRepository<StateApplication> stateApplicationRepo)
        {
            _stateApplicationRepo = stateApplicationRepo;
        }

        [AbpAllowAnonymous]
        public async Task<StateApplicationDto> CreateStateApplicationAsync(CreateStateApplicationDto input)
        {
            var stateApplication = ObjectMapper.Map<StateApplication>(input);
            stateApplication = await _stateApplicationRepo.InsertAsync(stateApplication);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<StateApplicationDto>(stateApplication);
        }

        [AbpAllowAnonymous]
        public async Task<StateApplicationDto> GetStateApplicationAsync(EntityDto<int> input)
        {
            var stateApplication = await _stateApplicationRepo.GetAsync(input.Id);
            return ObjectMapper.Map<StateApplicationDto>(stateApplication);
        }

        [AbpAllowAnonymous]
        public async Task<StateApplicationDto> GetStateApplicationByJSAsync(GetStateApplicationByJSInput input)
        {
            var stateApplication = await _stateApplicationRepo.GetAllListAsync(s => s.IDJobSeeker == input.IdJobSeeker && s.IDRecruitment == input.IdRecruitment);
            if(stateApplication != null)
                return ObjectMapper.Map<StateApplicationDto>(stateApplication[0]);
            else
            {
                var temp = await _stateApplicationRepo.GetAsync(-1);
                return ObjectMapper.Map<StateApplicationDto>(temp);
            }
        }

        [AbpAllowAnonymous]
        public async Task<StateApplicationDto> UpdateStateApplicationAsync(UpdateStateApplicationDto input)
        {
            var stateApplication = await _stateApplicationRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, stateApplication);
            var savedStateApplication = await _stateApplicationRepo.UpdateAsync(stateApplication);
            return ObjectMapper.Map<StateApplicationDto>(savedStateApplication);
        }
        [AbpAllowAnonymous]
        public async Task DeleteStateApplicationAsync(EntityDto<int> input)
        {
            await _stateApplicationRepo.DeleteAsync(input.Id);
        }
    }
}
