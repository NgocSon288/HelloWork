using Abp.Authorization;
using Abp.Localization;

namespace SE347.L11_HelloWork.Core.Authorization.Groups.Group0
{
    public static class Group0PermissionsConfiguration
    {
        public static IPermissionDefinitionContext ConfigGroup0(
            this IPermissionDefinitionContext context) {
            
            var pages = context.GetPermissionOrNull("Pages") ?? context.CreatePermission("Pages", L("Pages"));
            
            // Thêm quyền mới dưới đây
            var demo = pages.CreateChildPermission(Group0PermissionsConst.Pages_Group0_Demos, L("Demo"));
            demo.CreateChildPermission(Group0PermissionsConst.Pages_Group0_Demos_Create, L("CreateDemo"));
            demo.CreateChildPermission(Group0PermissionsConst.Pages_Group0_Demos_Update, L("UpdateDemo"));
            demo.CreateChildPermission(Group0PermissionsConst.Pages_Group0_Demos_Delete, L("DeleteDemo"));

            return context;
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, L11_HelloWorkConsts.LocalizationSourceName);
        }
    }
}