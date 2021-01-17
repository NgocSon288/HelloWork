using Abp.AspNetCore.Mvc.Controllers;
using Group5.SE347.L11_HelloWork.Application;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Group5.SE347.L11_HelloWork.Application.Services.StateApplications.Dto;
using Group5.SE347.L11_HelloWork.Application.Services.StateApplications;
using Abp.Domain.Entities;
using Abp.Application.Services.Dto;
using System;

namespace Group5.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class StateApplicationsController : AbpController
    {
        private readonly IStateApplicationAppService _stateApplicationAppService;

        public StateApplicationsController(IStateApplicationAppService stateApplicationAppService)
        {
            _stateApplicationAppService = stateApplicationAppService;
        }

        [HttpGet("{id}", Name = "GetStateApplication")]
        public async Task<StateApplicationDto> Get(int id)
        {
            return await _stateApplicationAppService.GetStateApplicationAsync(new EntityDto<int>(id));
        }

        [HttpPut]
        public async Task<StateApplicationDto> GetByJS(GetStateApplicationByJSInput input)
        {
            return await _stateApplicationAppService.GetStateApplicationByJSAsync(input);
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateStateApplicationDto input)
        {
            var newStateApplication = await _stateApplicationAppService.CreateStateApplicationAsync(input);
            return CreatedAtRoute("GetStateApplication", new { id = newStateApplication.Id }, newStateApplication);
        }

        [HttpPut]
        public async Task<StateApplicationDto> Update(UpdateStateApplicationDto input)
        {
            return await _stateApplicationAppService.UpdateStateApplicationAsync(input);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _stateApplicationAppService.DeleteStateApplicationAsync(new EntityDto<int>(id));
            return NoContent();
        }
    }
}
