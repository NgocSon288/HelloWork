using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;

namespace SE347.L11_HelloWork.Entities
{
    public class Experience : Entity<int>, IFullAudited
    {
        public string Company { get; set; }
        public int StartYear { get; set; }
        public int EndYear { get; set; }
        public string Role { get; set; }
        public string Description { get; set; }
        public long? IDJobSeeker { get; set; }

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}
