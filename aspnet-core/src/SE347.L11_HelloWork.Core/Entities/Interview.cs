using System;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;

namespace SE347.L11_HelloWork.Entities
{
    public class Interview : Entity<int>, IFullAudited
    {
        public int IDJobSeeker { get; set; }
        public int IDRecruitment { get; set; }
        public string? Location   { get; set; }
        public DateTime? InterviewTime { get; set; }
        public string? Description { get; set; }

        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}
