using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;
using Group6.SE347.L11_HelloWork.Application.Services.Expertises.Dto;

namespace Group6.SE347.L11_HelloWork.Application.Services.Recruitments.Dto
{
    [AutoMapTo(typeof(Recruitment))]
    public class CreateRecruitmentDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public DateTime FinishDate { get; set; }
        [Required]
        public string WayOfWork { get; set; }
        [Required]
        public string SalaryRange { get; set; }
        [Required]
        public ICollection<ExpertiseForCRcrmDto> Expertises { get; set; }

        public string UrgentLevel { get; set; }
        [Required]
        public string Description { get; set; }

        public string Requirement { get; set; }
        [Required]
        public string ContactEmail { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public long CreatorUserId { get; set; }
    }
}
