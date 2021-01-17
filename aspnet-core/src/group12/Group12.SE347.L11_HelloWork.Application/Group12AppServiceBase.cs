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

namespace Group12.SE347.L11_HelloWork.Application
{
    /// <summary>
    /// Your custom appservices should inherit this base class
    /// </summary>
    public abstract class Group12AppServiceBase : ApplicationService
    {
        public UserManager UserManager { get; set; }

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
