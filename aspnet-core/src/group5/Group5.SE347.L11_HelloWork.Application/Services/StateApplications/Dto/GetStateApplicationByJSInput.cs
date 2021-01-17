using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;

namespace Group5.SE347.L11_HelloWork.Application.Services.StateApplications.Dto
{
    public class GetStateApplicationByJSInput
    {
        [Required]
        [Range(1, int.MaxValue)]
        public int IdJobSeeker { get; set; }
        [Required]
        [Range(1, int.MaxValue)]
        public int IdRecruitment { get; set; }
    }
}
