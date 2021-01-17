using Abp.Authorization;
using Abp.Localization;

namespace SE347.L11_HelloWork.Core.Authorization.Groups.Group6
{
    public static class Group6PermissionsConfiguration
    {
        public static IPermissionDefinitionContext ConfigGroup6(
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