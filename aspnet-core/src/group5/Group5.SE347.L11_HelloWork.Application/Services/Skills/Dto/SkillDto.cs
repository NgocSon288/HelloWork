using System;
using System.Collections.Generic;
using System.Text;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;

namespace Group5.SE347.L11_HelloWork.Application.Services.Skills.Dto
{
    [AutoMapFrom(typeof(Skill))]
    public class SkillDto : EntityDto<int>
    {
        public string SkillName { get; set; }
        public long? IDJobSeeker { get; set; }
    }
}
