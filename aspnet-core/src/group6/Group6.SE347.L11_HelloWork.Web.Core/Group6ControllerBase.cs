using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;
using SE347.L11_HelloWork;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group6.SE347.L11_HelloWork.Web.Core
{
    public abstract class Group6ControllerBase: AbpController
    {
        protected Group6ControllerBase()
        {
            LocalizationSourceName = L11_HelloWorkConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
