using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group1.SE347.L11_HelloWork.Application.Services.RecruiterService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group1.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class  RecruiterController: AbpController
    {
        private readonly IRecruiterAppService _recruiterService;

        public RecruiterController(IRecruiterAppService recruiterService)
        {
            _recruiterService = recruiterService;
        }

        [HttpGet("{id}", Name = "GetRecruiters")]
        public async Task<RecruiterDto> Get(int id)
        {
            var recruiterDto = await _recruiterService.GetRecuiter(new EntityDto<int>(id));
            return recruiterDto;
        }
    }
}
