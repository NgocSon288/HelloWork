using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;

namespace Group9.SE347.L11_HelloWork.Application.Services.Dto
{
    [AutoMap(typeof(Recruitment))]
    public class RecruitmentFilter : PagedAndSortedResultRequestDto
    {
        public string Name { get; set; }
        public string Position { get; set; }

        public string WayOfWork { get; set; }
        public string SalaryRange { get; set; }
        public string UrgentLevel { get; set; }

        public string Requirement { get; set; }
        public string State { get; set; }
    }
}
