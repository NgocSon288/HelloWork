using Abp.AspNetCore.Mvc.Controllers;
using System;
using System.Collections.Generic;
using System.Text;
using SE347.L11_HelloWork;
using Microsoft.AspNetCore.Identity;
using Abp.IdentityFramework;

namespace Group1.SE347.L11_HelloWork.Controllers
{
    public abstract class Group1ControllerBase : AbpController
    {
        protected Group1ControllerBase()
        {
            LocalizationSourceName = L11_HelloWorkConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
