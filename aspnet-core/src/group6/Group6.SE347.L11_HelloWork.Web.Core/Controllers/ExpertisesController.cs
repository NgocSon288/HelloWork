using Abp.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using Group6.SE347.L11_HelloWork.Application.Services.Expertises;
using System.Threading.Tasks;
using Group6.SE347.L11_HelloWork.Application.Services.Expertises.Dto;
using Abp.Application.Services.Dto;

namespace Group6.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ExpertisesController : Group6ControllerBase
    {

        private readonly IExpertiseAppService _expertiseAppService;

        public ExpertisesController(IExpertiseAppService expertiseService)
        {
            _expertiseAppService = expertiseService;
        }
        [HttpGet("{id}", Name = "GetExpertise")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var result = await _expertiseAppService.GetExpertiseAsync(new EntityDto<int>(id));
                return Ok(result);
            }
            catch
            {
                return NotFound();
            }

        }
        [HttpGet]
        public async Task<ListResultDto<ExpertiseDto>> Get()
        {
            return await _expertiseAppService.GetExpertisesAsync();
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateExpertiseDto input)
        {
            var newExpertise = await _expertiseAppService.CreateExpertiseAsync(input);
            return CreatedAtRoute("GetExpertise", new { id = newExpertise.Id }, newExpertise);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _expertiseAppService.DeleteExpertiseAsync(id);
                return NoContent();
            }
            catch
            {
                return NotFound();
            }
        }
    }
}
