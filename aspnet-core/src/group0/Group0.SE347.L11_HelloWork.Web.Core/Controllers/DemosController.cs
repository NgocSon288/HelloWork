using Abp.AspNetCore.Mvc.Controllers;
using Group0.SE347.L11_HelloWork.Application.Services.DemoService1;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Group0.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DemosController : AbpController
    {
        private readonly IDemoService1AppService _demoService1AppService;

        public DemosController(IDemoService1AppService demoService1AppService)
        {
            _demoService1AppService = demoService1AppService;
        }

        [HttpGet]
        public async Task<IActionResult> Test()
        {
            try
            {
                var jobTypes = await _demoService1AppService.GetJobTypes();
                return Ok(jobTypes);
            }
            catch (Exception)
            {
                return StatusCode(403, "You do not have permission to perform this action");
            }
        }
    }
}
