using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group7.SE347.L11_HelloWork.Application.Services.RegisterServices.DTO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group7.SE347.L11_HelloWork.Application.Services.RegisterServices
{
    public interface IRegisterServiceAppService : IApplicationService
    {
        bool CreateRegisterService(CreateRegisterServiceDTO input);
        ListResultDto<RegisterServiceDTO> GetRegisterServices();
        ListResultDto<RegisterServiceDTO> GetRegisterServicesByUserId(int id);
        IActionResult ApproveRegisterService(int registerServiceId);
        RegisterServiceDTO GetRegisterServiceById(int id);
        bool DeleteRegisterService(int id);
        bool ExtendRegisterService(int id);
        bool CancelExtendRegisterService(int id);
    }
}
