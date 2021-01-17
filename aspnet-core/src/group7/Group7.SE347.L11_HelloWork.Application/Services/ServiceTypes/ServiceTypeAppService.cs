using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Repositories;
using Group7.SE347.L11_HelloWork.Application.Services.ServiceTypes.DTO;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Group7.SE347.L11_HelloWork.Application.Services.ServiceTypes
{
    public class ServiceTypeAppService : Group7AppServiceBase, IServiceTypeAppService
    {
        private readonly IRepository<ServiceType> _serviceTypeRepo;
        private readonly IRepository<Service> _serviceRepo;

        public ServiceTypeAppService(IRepository<ServiceType> serviceTypeRepo, IRepository<Service> serviceRepo)
        {
            _serviceTypeRepo = serviceTypeRepo;
            _serviceRepo = serviceRepo;
        }

        public ServiceTypeDTO GetServiceTypeById(int id)
        {
            var findSerivceType = _serviceTypeRepo.GetAll().FirstOrDefault(x => x.Id == id);
            return ObjectMapper.Map<ServiceTypeDTO>(findSerivceType);
        }

        public ListResultDto<ServiceTypeDTO> GetListServiceType() {
            var listServiceType = _serviceTypeRepo.GetAll();

            return new ListResultDto<ServiceTypeDTO>(
                listServiceType.Select(jt => ObjectMapper.Map<ServiceTypeDTO>(jt)).ToList()
            );
        }

        public ListResultDto<ResultServiceDTO> GetFullInfoService() {
            var listServiceType = _serviceTypeRepo.GetAll().ToList();
            List<ResultServiceDTO> resultServiceDTOs= new List<ResultServiceDTO>();
            foreach (ServiceType serviceType in listServiceType)
            {
                List<Service> listService = _serviceRepo.GetAll().Where(x => x.ServiceTypeId == serviceType.Id).ToList();
                ResultServiceDTO resultServiceDTO = new ResultServiceDTO();
                resultServiceDTO.Name = serviceType.Name;
                resultServiceDTO.Unit = serviceType.Unit;
                resultServiceDTO.Description = serviceType.Description;
                resultServiceDTO.services = listService;
                resultServiceDTOs.Add(resultServiceDTO);
            }
            return new ListResultDto<ResultServiceDTO>(
                resultServiceDTOs.Select(jt => ObjectMapper.Map<ResultServiceDTO>(jt)).ToList()
            );
        }
    }
}
