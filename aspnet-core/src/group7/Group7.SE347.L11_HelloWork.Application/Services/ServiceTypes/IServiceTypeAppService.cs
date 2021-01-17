using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group7.SE347.L11_HelloWork.Application.Services.ServiceTypes.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group7.SE347.L11_HelloWork.Application.Services.ServiceTypes
{
    public interface IServiceTypeAppService : IApplicationService
    {
        ServiceTypeDTO GetServiceTypeById(int id);
        ListResultDto<ServiceTypeDTO> GetListServiceType();
        ListResultDto<ResultServiceDTO> GetFullInfoService();

    }
}
