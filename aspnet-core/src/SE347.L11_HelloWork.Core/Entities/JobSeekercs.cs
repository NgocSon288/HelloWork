using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections;
using System.Collections.Generic;

namespace SE347.L11_HelloWork.Entities
{
    public class JobSeeker : Entity<int>, IFullAudited
    {
        public string? Name { get; set; }
        public DateTime? Birthday { get; set; }
        public string? Description { get; set; }
        public string? WorkLocation { get; set; }
        public string? Address { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Expertise { get; set; }
        public string? Facebook { get; set; }
        public string? Github { get; set; }
        public string? Twitter { get; set; }
        public string? Image { get; set; }
        public string? Field { get; set; }
        public string? Sex { get; set; }

        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }

        public ICollection<Comment> Comments { get; set; }
    }
}
