using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;

namespace Group6.SE347.L11_HelloWork.Application.Services.Expertises.Dto
{
    [AutoMapFrom(typeof(Expertise))]
    public class ExpertiseForCRcrmDto : EntityDto<int>
    {
        //public ICollection<ExpertiseRecruitment> ExpertiseRecruitments { get; set; }
    }
    //test
}
