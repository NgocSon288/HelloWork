using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Group5.SE347.L11_HelloWork.Application.Services.Skills.Dto
{
    [AutoMapTo(typeof(Skill))]
    public class CreateSkillDto : PagedAndSortedResultRequestDto
    {
        [Required]
        public string SkillName { get; set; }
        [Required]
        public long? IDJobSeeker { get; set; }
    }
}
