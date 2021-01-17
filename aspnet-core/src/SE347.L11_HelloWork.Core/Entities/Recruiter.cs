using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Configuration;
using System.Text;

namespace SE347.L11_HelloWork.Entities
{
    public class Recruiter : Entity<int>, IFullAudited
    { 
        public long? IDUser { get; set; }
        public long? IDCurrentPosition { get; set; }
        public string? Name { get; set; } 
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Address { get; set; }
        public string? NoIDCard { get; set; } 
        public string? Image { get; set; }

        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }

      
        [ForeignKey("Company")]
        public int IDCompany { get; set; }
        public Company Company { get; set; }

        public ICollection<Comment> Comments { get; set; }
    }
}
