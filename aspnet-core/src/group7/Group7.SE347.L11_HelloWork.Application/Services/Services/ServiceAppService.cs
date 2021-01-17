using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Group7.SE347.L11_HelloWork.Application;
using Group7.SE347.L11_HelloWork.Application.Services.Services.DTO;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using SE347.L11_HelloWork.Services;
using SE347.L11_HelloWork.Services.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group7.SE347.L11_HelloWork.Application.Services.Services
{
    public class ServiceAppService : Group7AppServiceBase, IServiceAppService
    {
        private readonly IRepository<Service> _serviceRepo;
        private readonly IRepository<ServiceType> _serviceTypeRepo;

        public ServiceAppService(IRepository<Service> serviceRepo, IRepository<ServiceType> serviceTypeRepo)
        {
            _serviceRepo = serviceRepo;
            _serviceTypeRepo = serviceTypeRepo;
        }

        //[AbpAuthorize(PermissionNames.Pages_Service_Create)]
        public async Task<ServiceDTO> CreateServiceAsync(CreateServiceDTO input)
        {
            var service = ObjectMapper.Map<Service>(input);
            service = await _serviceRepo.InsertAsync(service);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<ServiceDTO>(service);
        }


        //[AbpAuthorize(PermissionNames.Pages_Service_Delete)]
        public async Task DeleteServiceAsync(EntityDto<int> input)
        {
            await _serviceRepo.DeleteAsync(input.Id);

        }

        public ListResultDto<ServiceDTO> GetListServiceByServiceTypeId(int serviceTypeId)
        {
            var findService = _serviceRepo.GetAll().Where(x => x.ServiceTypeId == serviceTypeId);
            return new ListResultDto<ServiceDTO>(
                findService.Select(jt => ObjectMapper.Map<ServiceDTO>(jt)).ToList()
            );
        }

        [AbpAllowAnonymous]
        public async Task<ListResultDto<ServiceDTO>> GetServicesAsync()
        {
            var services = await _serviceRepo.GetAllListAsync();

            return new ListResultDto<ServiceDTO>(
                services.Select(jt => ObjectMapper.Map<ServiceDTO>(jt)).ToList()
            );
        }
    }
}
