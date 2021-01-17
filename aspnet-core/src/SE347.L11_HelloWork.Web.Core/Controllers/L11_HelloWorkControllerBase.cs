using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace SE347.L11_HelloWork.Controllers
{
    public abstract class L11_HelloWorkControllerBase: AbpController
    {
        protected L11_HelloWorkControllerBase()
        {
            LocalizationSourceName = L11_HelloWorkConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
