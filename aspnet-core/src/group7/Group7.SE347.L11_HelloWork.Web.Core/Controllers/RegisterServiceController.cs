using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group7.SE347.L11_HelloWork.Application.Services.RegisterServices;
using Group7.SE347.L11_HelloWork.Application.Services.RegisterServices.DTO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group7.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RegisterServiceController : AbpController
    {
        private readonly IRegisterServiceAppService _registerServiceAppService;

        public RegisterServiceController(IRegisterServiceAppService registerServiceAppService)
        {
            _registerServiceAppService = registerServiceAppService;
        }

        [HttpPost]
        public bool Create(CreateRegisterServiceDTO input)
        {
            var newRegisterService = _registerServiceAppService.CreateRegisterService(input);
            return true;
        }

        [HttpGet]
        public ListResultDto<RegisterServiceDTO> GetAll()
        {
            return _registerServiceAppService.GetRegisterServices();
        }

        [HttpGet]
        public ListResultDto<RegisterServiceDTO> GetRegisterServiceByUserId(int id) {
            var listRegisterService = _registerServiceAppService.GetRegisterServicesByUserId(id);
            return listRegisterService;
        }

        [HttpGet]
        public RegisterServiceDTO GetRegisterServiceById(int id)
        {
            return _registerServiceAppService.GetRegisterServiceById(id);
        }

        [HttpPut]
        public IActionResult ApproveRegisterService(int registerServiceId) {
            var approvedRegisterService = _registerServiceAppService.ApproveRegisterService(registerServiceId);
            return Ok(approvedRegisterService);
        }

        [HttpDelete]
        public bool DeleteRegisterService(int id)
        {
            _registerServiceAppService.DeleteRegisterService(id);
            return true;
        }

        [HttpPut]
        public IActionResult ExtendRegisterService(int id)
        {
            _registerServiceAppService.ExtendRegisterService(id);
            return Ok("Extend success!");
        }

        [HttpPut]
        public IActionResult CancelExtendRegisterService(int id)
        {
            _registerServiceAppService.CancelExtendRegisterService(id);
            return Ok("Cancel extend success!");
        }
    }


}
