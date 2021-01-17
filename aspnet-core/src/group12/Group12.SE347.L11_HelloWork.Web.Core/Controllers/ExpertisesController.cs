using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group12.SE347.L11_HelloWork.Application.Services.Expertises;
using System.Threading.Tasks;

namespace Group12.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ExpertisesController : AbpController
    {
        private readonly IExpertisesAppService _expertisesAppService;

        public ExpertisesController(IExpertisesAppService expertisesAppService)
        {
            _expertisesAppService = expertisesAppService;
        }

        [HttpGet]
        public async Task<List<string>> GetAll()
        {
            return await _expertisesAppService.GetAllAsync();
        }
    }
}
