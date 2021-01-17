using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group7.SE347.L11_HelloWork.Application.Services.RegisterServices.DTO
{
    [AutoMapFrom(typeof(RegisterService))]
    public class RegisterServiceDTO: EntityDto<int>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int ServiceId { get; set; }
        public int EmployerId { get; set; }
        public string EmployerName { get; set; }
        public string Unit { get; set; }
        public DateTime RegistrationDate { get; set; }
        public int RemainUseTimes { get; set; }
        public string Status { get; set; }
        public bool Extend { get; set; }
    }
}
