using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;

namespace SE347.L11_HelloWork.Entities
{
    public class CVEmployeeInformation : Entity<int>
    {
        public string Name { get; set; }
        public string Bio { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Facebook { get; set; }
        public string Github { get; set; }
        public string Twitter { get; set; }
        public List<ExperienceDetail> ExperienceDetails { get; set; }
        public List<EducationDetail> EducationDetails { get; set; }
        public List<SkillDetail> SkillDetails { get; set; }
        public List<AchievementDetail> AchievementDetails { get; set; }
        public long? CreatorUserId { get; set; }
        public DateTime CreationTime { get; set; }
        public long? LastModifierUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public long? DeleterUserId { get; set; }
        public DateTime? DeletionTime { get; set; }
        public bool IsDeleted { get; set; }
    }   
}
