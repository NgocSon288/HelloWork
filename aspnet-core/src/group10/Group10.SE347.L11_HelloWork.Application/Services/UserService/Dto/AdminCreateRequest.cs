using System.ComponentModel.DataAnnotations;
using Abp.Auditing;
using Abp.Authorization.Users;
using Abp.AutoMapper;
using Abp.Runtime.Validation;
using SE347.L11_HelloWork.Authorization.Users;
using System.Collections.Generic;

namespace Group10.SE347.L11_HelloWork.Application.Services.UserService.Dto
{
    public class AdminCreateRequest
    {
        [Required]
        [StringLength(AbpUserBase.MaxUserNameLength)]
        public string UserName { get; set; }

        [Required]
        [StringLength(AbpUserBase.MaxNameLength)]
        public string Name { get; set; }


        //[Required]
        //[EmailAddress]
        //[StringLength(AbpUserBase.MaxEmailAddressLength)]
        //public string EmailAddress { get; set; }


        public List<string> RoleNames { get; set; }

        [Required]
        [StringLength(AbpUserBase.MaxPlainPasswordLength)]
        [DisableAuditing]
        public string Password { get; set; }



    }
}
