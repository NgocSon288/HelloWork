﻿using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;

namespace SE347.L11_HelloWork.Entities
{
    public class Achievement : Entity<int>, IFullAudited
    {
        public string AchievementName { get; set; }
        public long? IDJobSeeker { get; set; }
        public int Year { get; set; }
        public string Organization { get; set; }
        public string Note { get; set; }

        public DateTime CreationTime { get; set; }
        public long? CreatorUserId { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}
