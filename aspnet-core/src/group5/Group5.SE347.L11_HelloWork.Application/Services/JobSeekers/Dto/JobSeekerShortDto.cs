using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;

namespace Group5.SE347.L11_HelloWork.Application.Services.JobSeekers.Dto
{
    [AutoMapFrom(typeof(JobSeeker))]
    public class JobSeekerShortDto : EntityDto<int>
    {
        public string Name { get; set; }
        public string Image { get; set; }
    }
}
