using System;
using System.Collections.Generic;
using System.Text;
using SE347.L11_HelloWork.Entities;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;

namespace Group4.SE347.L11_HelloWork.Application.Services.CVEmployeeInformations.Dto
{
    [AutoMapTo(typeof(CVEmployeeInformation))]
    public class CreateCVEmployeeInformationDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Bio { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Facebook { get; set; }
        [Required]
        public string Github { get; set; }
        [Required]
        public string Twitter { get; set; }
        [Required]
        public List<ExperienceDetail> ExperienceDetails { get; set; }
        [Required]
        public List<EducationDetail> EducationDetails { get; set; }
        [Required]
        public List<SkillDetail> SkillDetails { get; set; }
        [Required]
        public List<AchievementDetail> AchievementDetails { get; set; }
    }
}
