using Abp.AspNetCore.Mvc.Controllers;
using Group5.SE347.L11_HelloWork.Application;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Group5.SE347.L11_HelloWork.Application.Services.StateApplicants.Dto;
using Group5.SE347.L11_HelloWork.Application.Services.StateApplicants;
using Abp.Domain.Entities;
using Abp.Application.Services.Dto;
using System;

namespace Group5.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class StateApplicantsController : AbpController
    {
        private readonly IStateApplicantAppService _stateApplicantAppService;

        public StateApplicantsController(IStateApplicantAppService stateApplicantAppService)
        {
            _stateApplicantAppService = stateApplicantAppService;
        }

        [HttpGet("{id}", Name = "GetStateApplicant")]
        public async Task<StateApplicantDto> Get(int id)
        {
            return await _stateApplicantAppService.GetStateApplicantAsync(new EntityDto<int>(id));
        }

        [HttpPut]
        public async Task<StateApplicantDto> GetByJS(GetStateApplicantByJSInput input)
        {
            return await _stateApplicantAppService.GetStateApplicantByJSAsync(input);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateStateApplicantDto input)
        {
            var newStateApplicant = await _stateApplicantAppService.CreateStateApplicantAsync(input);
            return CreatedAtRoute("GetStateApplicant", new { id = newStateApplicant.Id }, newStateApplicant);
        }

        [HttpPut]
        public async Task<StateApplicantDto> Update(UpdateStateApplicantDto input)
        {
            return await _stateApplicantAppService.UpdateStateApplicantAsync(input);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _stateApplicantAppService.DeleteStateApplicantAsync(new EntityDto<int>(id));
            return NoContent();
        }
    }
}
