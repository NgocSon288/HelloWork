using System.ComponentModel.DataAnnotations;
using Abp.MultiTenancy;

namespace SE347.L11_HelloWork.Authorization.Accounts.Dto
{
    public class IsTenantAvailableInput
    {
        [Required]
        [StringLength(AbpTenantBase.MaxTenancyNameLength)]
        public string TenancyName { get; set; }
    }
}
