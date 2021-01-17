using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SE347.L11_HelloWork.Entities
{
    public class Comment : Entity<int>, IFullAudited
    {
        public string Reason { get; set; }
        public string Description { get; set; }
        public float? StarNumber { get; set; }


        public long? CreatorUserId { get; set; }
        [ForeignKey("JobSeeker")]
        public int IDJobSeeker { get; set; }
        public JobSeeker JobSeeker { get; set; }

        [ForeignKey("Recruiter")]
        public int IDRecruiter { get; set; }
        public Recruiter Recruiter { get; set; }

        public bool IsRecruiterWrite { get; set; }


        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }

    }
}
