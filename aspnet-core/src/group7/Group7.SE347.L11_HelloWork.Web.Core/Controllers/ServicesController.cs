using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group7.SE347.L11_HelloWork.Application.Services.Services;
using Group7.SE347.L11_HelloWork.Application.Services.Services.DTO;
using Microsoft.AspNetCore.Mvc;
using SE347.L11_HelloWork.Services;
using SE347.L11_HelloWork.Services.DTO;
using System.Threading.Tasks;

namespace Group7.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ServicesController : AbpController
    {
        private readonly IServiceAppService _serviceAppService;

        public ServicesController(IServiceAppService serviceAppService)
        {
            _serviceAppService = serviceAppService;
        }

        [HttpGet]
        public async Task<ListResultDto<ServiceDTO>> GetAll()
        {
            return await _serviceAppService.GetServicesAsync();
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateServiceDTO input)
        {
            var newService = await _serviceAppService.CreateServiceAsync(input);
            return Ok(newService);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _serviceAppService.DeleteServiceAsync(new EntityDto<int>(id));
            return NoContent();
        }
    }
}
