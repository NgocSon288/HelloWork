using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Group7.SE347.L11_HelloWork.Application.Services.Services.DTO
{
    [AutoMapTo(typeof(Service))]
    public class CreateServiceDTO
    {
        [Required]
        public int ServiceTypeId { get; set; }
        [Required]
        public int UseTimes { get; set; }
        [Required]
        public double Price { get; set; }
    }
}
