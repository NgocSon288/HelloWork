using System;
using System.Collections.Generic;
using System.Text;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System.Collections;
using Microsoft.VisualBasic;
using Castle.Components.DictionaryAdapter;
namespace SE347.L11_HelloWork.Entities
{
    public class Recruitment : Entity<int>, IFullAudited
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

        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}
