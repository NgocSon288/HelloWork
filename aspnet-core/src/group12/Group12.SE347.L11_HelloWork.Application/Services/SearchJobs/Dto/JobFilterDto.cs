using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group12.SE347.L11_HelloWork.Application.Services.SearchJobs.Dto
{
    public class JobFilterDto
    {
        public string Name { get; set; }
        public string WayOfWork { get; set; }
        public string SalaryRange { get; set; }
        public List<string> Expertises { get; set; }
        public string State { get; set; }
        public string Province { get; set; }
        public string Operation { get; set; }
    }
}
