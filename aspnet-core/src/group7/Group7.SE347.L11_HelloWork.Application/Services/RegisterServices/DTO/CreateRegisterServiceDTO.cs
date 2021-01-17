using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Group7.SE347.L11_HelloWork.Application.Services.RegisterServices.DTO
{
    [AutoMapTo(typeof(RegisterService))]
    public class CreateRegisterServiceDTO
    {
            [Required]
            public int ServiceId { get; set; }
            [Required]
            public int EmployerId { get; set; }
        
    }
}
