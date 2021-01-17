using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;

namespace SE347.L11_HelloWork.Entities
{
    public class ExperienceDetail : Entity<int>
    {
        public string JobName { get; set; }
        public string CompanyName { get; set; }
        public string Period { get; set; }
        public string JobPosition { get; set; }
        public string Content { get; set; }

        [ForeignKey("CVEmployeeInformation")]
        public int CVEmployeeInformationID { get; set; }
        public CVEmployeeInformation CVEmployeeInformation { get; set; }
        

    }
}
