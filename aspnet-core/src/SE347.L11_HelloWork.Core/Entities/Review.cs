using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;

namespace SE347.L11_HelloWork.Entities
{
    public class Review : Entity<int>, IFullAudited
    {
        public float? RatingStar { get; set; }
        public long? NumberOfReview { get; set; }
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
