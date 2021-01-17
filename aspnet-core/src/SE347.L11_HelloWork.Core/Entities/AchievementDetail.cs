using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;

namespace SE347.L11_HelloWork.Entities
{
    public class AchievementDetail : Entity<int>
    {
        public string Name { get; set; }
        public string Organization { get; set; }
        public string Period { get; set; }
        public string Content { get; set; }

        [ForeignKey("CVEmployeeInformation")]
        public int CVEmployeeInformationID { get; set; }
        public CVEmployeeInformation CVEmployeeInformation { get; set; }
        
    }
}
