using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;

namespace SE347.L11_HelloWork.Entities
{
    public class Education : Entity<int>, IFullAudited
    {
        public string Name { get; set; }
        public string School { get; set; }
        public DateTime StartYear { get; set; }
        public DateTime EndYear { get; set; }
        public string Majors { get; set; }
        public long? IDJobSeeker { get; set; }

        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}
