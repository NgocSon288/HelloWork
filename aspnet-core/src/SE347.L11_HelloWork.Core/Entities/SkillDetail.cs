using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;

namespace SE347.L11_HelloWork.Entities
{
    public class SkillDetail : Entity<int>
    {
        public string SkillName { get; set; }

        [ForeignKey("CVEmployeeInformation")]
        public int CVEmployeeInformationID { get; set; }
        public CVEmployeeInformation CVEmployeeInformation { get; set; }
    }
}
