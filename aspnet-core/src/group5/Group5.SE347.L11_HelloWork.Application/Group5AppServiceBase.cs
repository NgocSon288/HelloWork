using Abp.Application.Services;
using Abp.IdentityFramework;
using Abp.Runtime.Session;
using Microsoft.AspNetCore.Identity;
using SE347.L11_HelloWork;
using SE347.L11_HelloWork.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application
{
    /// <summary>
    /// Your custom appservices should inherit this base class
    /// </summary>
    public abstract class Group5AppServiceBase : ApplicationService
    {
        public UserManager UserManager { get; set; }

        protected Group5AppServiceBase()
        {
            LocalizationSourceName = L11_HelloWorkConsts.LocalizationSourceName;
        }

        protected virtual async Task<User> GetCurrentUserAsync()
        {
            var user = await UserManager.FindByIdAsync(AbpSession.GetUserId().ToString());
            if (user == null)
            {
                throw new Exception("There is no current user!");
            }

            return user;
        }
        protected virtual void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
