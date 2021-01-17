using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;

namespace Group4.SE347.L11_HelloWork.Application.Services.CVEmployeeInformations.Dto
{
    [AutoMapFrom(typeof(CVEmployeeInformation))]
    public class CVEmployeeInformationDto:EntityDto<int>
    {
        public string Name { get; set; }
        public string Bio { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Facebook { get; set; }
        public string Github { get; set; }
        public string Twitter { get; set; }
        public List<ExperienceDetail> ExperienceDetails { get; set; }
        public List<EducationDetail> EducationDetails { get; set; }
        public List<SkillDetail> SkillDetails { get; set; }
        public List<AchievementDetail> AchievementDetails { get; set; }
    }
}
