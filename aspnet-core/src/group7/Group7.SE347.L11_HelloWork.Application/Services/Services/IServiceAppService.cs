using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group7.SE347.L11_HelloWork.Application.Services.Services.DTO;
using SE347.L11_HelloWork.Services.DTO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group7.SE347.L11_HelloWork.Application.Services.Services
{
    public interface IServiceAppService : IApplicationService
    {
        Task<ListResultDto<ServiceDTO>> GetServicesAsync();
        Task<ServiceDTO> CreateServiceAsync(CreateServiceDTO input);
        Task DeleteServiceAsync(EntityDto<int> input);
        ListResultDto<ServiceDTO> GetListServiceByServiceTypeId(int serviceTypeId);
    }
}
