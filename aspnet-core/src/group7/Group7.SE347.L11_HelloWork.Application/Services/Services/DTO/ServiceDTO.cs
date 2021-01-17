using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace SE347.L11_HelloWork.Services.DTO
{
    [AutoMapFrom(typeof(Service))]
    public class ServiceDTO : EntityDto<int>
    {
        public int ServiceTypeId { get; set; }
        public int UseTimes { get; set; }
        public double Price { get; set; }

    }
}
