using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SE347.L11_HelloWork.Entities
{
    public class UserInfo : Entity<int>, IFullAudited
    {
         public const string ADDRESS_PROVINCE = "ADDRESS_PROVINCE";
        public const string ADDRESS_DETAIL = "ADDRESS_DETAIL";
        public const string IDENTIFY_NUMBER = "IDENTIFY_NUMBER";
        public const string IS_EMPLOYER = "IS_EMPLOYER";

        [Required]
        public long UserId { get; set; }
        [Required]
        public string Key { get; set; }
        public string Value { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}

