using Abp.Authorization;
using SE347.L11_HelloWork.Authorization.Roles;
using SE347.L11_HelloWork.Authorization.Users;

namespace SE347.L11_HelloWork.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
