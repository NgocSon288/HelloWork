using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;
using Group6.SE347.L11_HelloWork.Application.Services.Expertises.Dto;

namespace Group6.SE347.L11_HelloWork.Application.Services.Recruitments
{
    [AutoMapFrom(typeof(Recruitment))]
    public class RecruitmentDto: EntityDto<int>
    {
        public string Name { get; set; }
        public DateTime FinishDate { get; set; }
        public string WayOfWork { get; set; }
        public string SalaryRange { get; set; }
        public ICollection<ExpertiseRecruitment> ExpertiseRecruitments { get; set; }
        public string UrgentLevel { get; set; }
        public string Description { get; set; }
        public string Requirement { get; set; }
        public string ContactEmail { get; set; }
        public string State { get; set; }
        public long CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }

    }
}
