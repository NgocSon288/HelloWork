using Abp.Authorization;
using Abp.Localization;

namespace SE347.L11_HelloWork.Core.Authorization.Groups.Group8
{
    public static class Group8PermissionsConfiguration
    {
        public static IPermissionDefinitionContext ConfigGroup8(
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