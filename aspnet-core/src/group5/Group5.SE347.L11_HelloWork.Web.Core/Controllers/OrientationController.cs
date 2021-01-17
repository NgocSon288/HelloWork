using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group5.SE347.L11_HelloWork.Application.Services.Orientations;
using Group5.SE347.L11_HelloWork.Application.Services.Orientations.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrientationController : AbpController
    {
        private readonly IOrientationAppService _orientationAppService;

        public OrientationController(IOrientationAppService orientationAppService)
        {
            _orientationAppService = orientationAppService;
        }

        [HttpGet("{id}", Name = "GetOrientation")]
        public async Task<ListResultDto<OrientationDto>> Get(int id)
        {
            return await _orientationAppService.GetOrientationAsync(new EntityDto<int>(id));
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateOrientationDto input)
        {
            var newOrientation = await _orientationAppService.CreateOrientationAsync(input);
            return CreatedAtRoute("GetOrientation", new { id = newOrientation.Id }, newOrientation);
        }

        [HttpPut]
        public async Task<OrientationDto> Update(UpdateOrientationDto input)
        {
            return await _orientationAppService.UpdateOrientationAsync(input);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _orientationAppService.DeleteOrientationAsync(new EntityDto<int>(id));
            return NoContent();
        }
    }
}
