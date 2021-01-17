using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.UI;
using Group7.SE347.L11_HelloWork.Application.Services.RegisterServices.DTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Authorization.Users;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Group7.SE347.L11_HelloWork.Application.Services.RegisterServices
{
    public class RegisterServiceAppService : Group7AppServiceBase, IRegisterServiceAppService
    {
        private readonly IRepository<RegisterService> _registerServiceRepo;
        private readonly IRepository<ServiceType> _serviceTypeRepo;
        private readonly IRepository<Service> _serviceRepo;
        private readonly UserManager _userManager;




        public RegisterServiceAppService(
            IRepository<RegisterService> registerServiceRepo,
            IRepository<ServiceType> serviceTypeRepo,
            IRepository<Service> serviceRepo,
            UserManager userManager
            )
        {
            _registerServiceRepo = registerServiceRepo;
            _serviceTypeRepo = serviceTypeRepo;
            _serviceRepo = serviceRepo;
            _userManager = userManager;
        }

        //[AbpAuthorize(PermissionNames.Pages_RegisterService_Create)]
        public bool CreateRegisterService(CreateRegisterServiceDTO input)
        {
            var registerService = ObjectMapper.Map<RegisterService>(input);
            if (String.IsNullOrEmpty((input.ServiceId).ToString()) || String.IsNullOrEmpty((input.EmployerId).ToString()))
            {
                throw new UserFriendlyException("Mission ServiceId or EmployerId");

            }
            registerService.status = "Đang chờ thanh toán";
            registerService.registrationDate = DateTime.Now;
            registerService.extend = false;
            registerService = _registerServiceRepo.Insert(registerService);
            CurrentUnitOfWork.SaveChanges();
            return true;
        }

        [AbpAllowAnonymous]
        public ListResultDto<RegisterServiceDTO> GetRegisterServices()
        {
            //var registerServices = await _registerServiceRepo.GetAllListAsync();

            //return new ListResultDto<RegisterServiceDTO>(
            //    registerServices.Select(jt => ObjectMapper.Map<RegisterServiceDTO>(jt)).ToList()
            //);

            List<RegisterServiceDTO> registerServiceDTOs = new List<RegisterServiceDTO>();
            var findRegisterServices = _registerServiceRepo.GetAll();

            foreach (RegisterService registerService in findRegisterServices)
            {
                var findService = _serviceRepo.Get(registerService.serviceId);
                var findServicetype = _serviceTypeRepo.Get(findService.ServiceTypeId);
                var findEmployee = _userManager.GetUserById(registerService.employerId);
                string Name = findServicetype.Name;
                RegisterServiceDTO registerServiceDTO = new RegisterServiceDTO();
                registerServiceDTO.Id = registerService.Id;
                registerServiceDTO.Name = Name;
                registerServiceDTO.RegistrationDate = registerService.registrationDate;
                registerServiceDTO.RemainUseTimes = findService.UseTimes;
                registerServiceDTO.Status = registerService.status;
                registerServiceDTO.Unit = findServicetype.Unit;
                registerServiceDTO.Description = findServicetype.Description;
                registerServiceDTO.ServiceId = findService.Id;
                registerServiceDTO.EmployerId = registerService.employerId;
                registerServiceDTO.EmployerName = findEmployee.Name;
                registerServiceDTO.Extend = registerService.extend;

                if (registerServiceDTO.Status == "Đang sử dụng") {
                    if (registerServiceDTO.Unit == "Ngày")
                    {
                        registerServiceDTO.RemainUseTimes = findService.UseTimes - ConvertDate(registerServiceDTO.RegistrationDate);
                    }
                }

                DateTime today = DateTime.Now;
                long date1 = ((DateTimeOffset)today).ToUnixTimeSeconds();
                long date2 = ((DateTimeOffset)registerServiceDTO.RegistrationDate).ToUnixTimeSeconds();
                if ((date1 - date2)/(24 * 3600) > 20) {
                    _registerServiceRepo.Delete(registerService);
                }

                registerServiceDTOs.Add(registerServiceDTO);
            }
            return new ListResultDto<RegisterServiceDTO>(
                registerServiceDTOs.Select(jt => ObjectMapper.Map<RegisterServiceDTO>(jt)).ToList()
            );
        }

        [AbpAllowAnonymous]
        public ListResultDto<RegisterServiceDTO> GetRegisterServicesByUserId(int id)
        {

            List<RegisterServiceDTO> registerServiceDTOs = new List<RegisterServiceDTO>();
            var findRegisterServices = _registerServiceRepo.GetAll().Where(x => x.employerId == id);
            if (findRegisterServices == null)
            {
                throw new UserFriendlyException("Can not find registerd services of this user!");
            }
            //var a = ListResultDto<RegisterServiceDTO>(
            //    findRegisterServices.Select(jt => ObjectMapper.Map<RegisterServiceDTO>(jt)).ToList()
            //);

            foreach (RegisterService registerService in findRegisterServices)
            {
                var findService = _serviceRepo.Get(registerService.serviceId);
                var findServicetype = _serviceTypeRepo.Get(findService.ServiceTypeId);
                string Name = findServicetype.Name;
                RegisterServiceDTO registerServiceDTO = new RegisterServiceDTO();
                registerServiceDTO.Id = registerService.Id;
                registerServiceDTO.Name = Name;
                registerServiceDTO.RegistrationDate = registerService.registrationDate;
                registerServiceDTO.RemainUseTimes = findService.UseTimes;
                registerServiceDTO.Status = registerService.status;
                registerServiceDTO.Unit = findServicetype.Unit;
                registerServiceDTO.Description = findServicetype.Description;
                registerServiceDTO.ServiceId = findService.Id;
                registerServiceDTO.EmployerId = registerService.employerId;
                registerServiceDTO.Extend = registerService.extend;

                if (registerServiceDTO.Status == "Đang sử dụng")
                {
                    if (registerServiceDTO.Unit == "Ngày")
                    {
                        registerServiceDTO.RemainUseTimes = findService.UseTimes - ConvertDate(registerServiceDTO.RegistrationDate);
                    }
                }

                DateTime today = DateTime.Now;
                long date1 = ((DateTimeOffset)today).ToUnixTimeSeconds();
                long date2 = ((DateTimeOffset)registerServiceDTO.RegistrationDate).ToUnixTimeSeconds();
                if ((date1 - date2) / (24 * 3600) > 20)
                {
                    _registerServiceRepo.Delete(registerService);
                }

                registerServiceDTOs.Add(registerServiceDTO);
            }
            return new ListResultDto<RegisterServiceDTO>(
                registerServiceDTOs.Select(jt => ObjectMapper.Map<RegisterServiceDTO>(jt)).ToList()
            );
        }

        //[AbpAuthorize(PermissionNames.Pages_RegisterService_Update)]
        public IActionResult ApproveRegisterService(int registerServiceId)
        {
            var findRegisterService = _registerServiceRepo.GetAll().FirstOrDefault(x => x.Id == registerServiceId);
            if (findRegisterService == null)
            {
                throw new UserFriendlyException("Can not find registerd service!");
            }
            findRegisterService.status = "Đang sử dụng";
            findRegisterService.registrationDate = DateTime.Now;
            return new OkObjectResult(findRegisterService.status);
        }

        public RegisterServiceDTO GetRegisterServiceById(int id)
        {
            //var findRegisterService = _registerServiceRepo.GetAll().FirstOrDefault(x => x.Id == id);
            //return ObjectMapper.Map<RegisterServiceDTO>(findRegisterService);
            var findRegisterService = _registerServiceRepo.GetAll().FirstOrDefault(x => x.Id == id);
            if (findRegisterService == null)
            {
                throw new UserFriendlyException("Can not find registerd service!");
            }
            var findService = _serviceRepo.Get(findRegisterService.serviceId);
            var findServicetype = _serviceTypeRepo.Get(findService.ServiceTypeId);

            string Name = findServicetype.Name;

            RegisterServiceDTO registerServiceDTO = new RegisterServiceDTO();
            registerServiceDTO.Id = findRegisterService.Id;
            registerServiceDTO.Name = Name;
            registerServiceDTO.RegistrationDate = findRegisterService.registrationDate;
            registerServiceDTO.RemainUseTimes = findService.UseTimes;
            registerServiceDTO.Status = findRegisterService.status;
            registerServiceDTO.Unit = findServicetype.Unit;
            registerServiceDTO.Description = findServicetype.Description;
            registerServiceDTO.ServiceId = findService.Id;
            registerServiceDTO.EmployerId = findRegisterService.employerId;
            registerServiceDTO.Extend = findRegisterService.extend;

            if (registerServiceDTO.Status == "Đang sử dụng")
            {
                if (registerServiceDTO.Unit == "Ngày")
                {
                    registerServiceDTO.RemainUseTimes = findService.UseTimes - ConvertDate(registerServiceDTO.RegistrationDate);
                }
            }

            return registerServiceDTO;

        }

        public bool DeleteRegisterService(int id)
        {
            var findRegisterService = _registerServiceRepo.Get(id);
            if (findRegisterService == null)
            {
                throw new UserFriendlyException("Can not find registerd service!");
            }
            _registerServiceRepo.Delete(findRegisterService);
            CurrentUnitOfWork.SaveChanges();
            return true;
        }


        public bool ExtendRegisterService(int id)
        {
            var findRegisterService = _registerServiceRepo.Get(id);
            if (findRegisterService == null) {
                throw new UserFriendlyException("Can not find registerd service!");
            }
            findRegisterService.extend = true;
            _registerServiceRepo.Update(findRegisterService);
            return true;
        }

        public bool CancelExtendRegisterService(int id)
        {
            var findRegisterService = _registerServiceRepo.Get(id);
            if (findRegisterService == null)
            {
                throw new UserFriendlyException("Can not find registerd service!");
            }
            findRegisterService.extend = false;
            _registerServiceRepo.Update(findRegisterService);
            return true;
        }

        private int ConvertDate(DateTime date)
        {
            DateTime today = DateTime.Now;
            long date1 = ((DateTimeOffset)today).ToUnixTimeSeconds();
            long date2 = ((DateTimeOffset)date).ToUnixTimeSeconds();
            return Convert.ToInt32((date1 - date2) / (24 * 3600));
        }
    }
}
