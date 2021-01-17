using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace SE347.L11_HelloWork.Entities
{
    public class RegisterService : Entity<int>, IFullAudited
    {
        public int serviceId { get; set; }
        public int employerId { get; set; }
        public DateTime registrationDate { get; set; }
        public string status { get; set; }
        public bool extend { get; set; }

        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}
