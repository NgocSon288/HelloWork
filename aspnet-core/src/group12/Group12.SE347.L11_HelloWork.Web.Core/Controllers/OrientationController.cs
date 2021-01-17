using Abp.AspNetCore.Mvc.Controllers;
using Group12.SE347.L11_HelloWork.Application.Services.Orientations;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group12.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrientationController : AbpController
    {
        private readonly IOrientationsAppService _appService;

        public OrientationController(IOrientationsAppService appService)
        {
            _appService = appService;
        }

        [HttpGet]
        public async Task<List<string>> GetAll()
        {
            return await _appService.GetAllAsync();
        }
    }
}
