using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
namespace SE347.L11_HelloWork.Entities
{
    public class ExpertiseRecruitment : Entity<int>
    {
        [ForeignKey("Expertise")]
        public int ExpertiseId { get; set; }
        public Expertise Expertise { get; set; }

        [ForeignKey("Recruitment")]
        public int RecruitmentId { get; set; }
        public Recruitment Recruitment { get; set; }
    }
}
