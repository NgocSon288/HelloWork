using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group12.SE347.L11_HelloWork.Application.Services.SearchJobs.Dto
{
    [AutoMapFrom(typeof(Recruitment))]
    public class JobResultDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime FinishDate { get; set; }
        public string WayOfWork { get; set; }
        public string SalaryRange { get; set; }
        public ICollection<string> Expertises { get; set; }
        public string UrgentLevel { get; set; }
        public string Description { get; set; }
        public string Requirement { get; set; }
        public string ContactEmail { get; set; }
        public string State { get; set; }
        //public string EmployerId { get; set; }
    }
}
