using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group7.SE347.L11_HelloWork.Application.Services.ServiceTypes;
using Group7.SE347.L11_HelloWork.Application.Services.ServiceTypes.DTO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group7.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ServiceTypeController : AbpController
    {
        private readonly IServiceTypeAppService _serviceTypeAppService;

        public ServiceTypeController(IServiceTypeAppService serviceTypeAppService)
        {
            _serviceTypeAppService = serviceTypeAppService;
        }

        [HttpGet]
        public ServiceTypeDTO GetServiceTypeById(int id) {
            return _serviceTypeAppService.GetServiceTypeById(id);
        }

        [HttpGet]
        public ListResultDto<ServiceTypeDTO> GetListServiceType() {
            return _serviceTypeAppService.GetListServiceType();
        }

        [HttpGet]
        public ListResultDto<ResultServiceDTO> GetFullService() {
            return _serviceTypeAppService.GetFullInfoService();
        }


    }
}
