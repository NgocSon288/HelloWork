using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Abp.Authorization;
using SE347.L11_HelloWork.Authorization.Roles;
using SE347.L11_HelloWork.Authorization.Users;
using SE347.L11_HelloWork.MultiTenancy;
using Microsoft.Extensions.Logging;

namespace SE347.L11_HelloWork.Identity
{
    public class SecurityStampValidator : AbpSecurityStampValidator<Tenant, Role, User>
    {
        public SecurityStampValidator(
            IOptions<SecurityStampValidatorOptions> options,
            SignInManager signInManager,
            ISystemClock systemClock,
            ILoggerFactory loggerFactory) 
            : base(options, signInManager, systemClock, loggerFactory)
        {
        }
    }
}
