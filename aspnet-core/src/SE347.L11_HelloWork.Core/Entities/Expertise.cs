using System;
using System.Collections.Generic;
using System.Text;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
namespace SE347.L11_HelloWork.Entities
{
    public class Expertise : Entity<int>, IFullAudited
    {
        public string Name { get; set; }
        public ICollection<ExpertiseRecruitment> ExpertiseRecruitments { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}
