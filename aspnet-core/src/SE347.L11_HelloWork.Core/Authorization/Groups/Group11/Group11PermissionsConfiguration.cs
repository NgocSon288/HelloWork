using Abp.Authorization;
using Abp.Localization;

namespace SE347.L11_HelloWork.Core.Authorization.Groups.Group11
{
    public static class Group11PermissionsConfiguration
    {
        public static IPermissionDefinitionContext ConfigGroup11(
            this IPermissionDefinitionContext context) {
            
            var pages = context.GetPermissionOrNull("Pages") ?? context.CreatePermission("Pages", L("Pages"));
            
            // Thêm quyền mới dưới đây
            

            return context;
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, L11_HelloWorkConsts.LocalizationSourceName);
        }
    }
}