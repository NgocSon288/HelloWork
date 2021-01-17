using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;
using SE347.L11_HelloWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group4.SE347.L11_HelloWork.Web.Core
{
    public abstract class Group4ControllerBase : AbpController
    {
        protected Group4ControllerBase()
        {
            LocalizationSourceName = L11_HelloWorkConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}