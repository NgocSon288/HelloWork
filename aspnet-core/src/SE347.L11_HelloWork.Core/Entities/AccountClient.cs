using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace SE347.L11_HelloWork.Entities
{
    public class AccountClient : Entity<Guid>, IFullAudited
    {
        public string UserName { get; set; }
        public string FullName { get; set; }
        public int AccountType { get; set; }//NTD 0 NTV 1
        public int ConfirmStatus { get; set; } //Da duyet 0, Dang cho duyet 1, yeu cau xac minh lai 2,
                                               //Chua gui chung thuc 3, khong duyet 4, chuac xac mnih email 5
        public int PublicStatus { get; set; }// Binh thuong 0, Bi bao cao 1

        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}
