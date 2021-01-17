using SE347.L11_HelloWork.Core.Authorization.Groups.Group0;
using System;
using System.Collections.Generic;
using System.Text;

namespace SE347.L11_HelloWork.Authorization.Groups.Group0
{
    public class Group0RolePermissions
    {
        /// <summary>
        /// Permissions for jobseeker
        /// </summary>
        public static List<string> JobSeekerRolePermissions
        {
            get
            {
                return new List<string>()
                {
                    Group0PermissionsConst.Pages_Group0_Demos,
                    Group0PermissionsConst.Pages_Group0_Demos_Create,
                    Group0PermissionsConst.Pages_Group0_Demos_Update,
                    Group0PermissionsConst.Pages_Group0_Demos_Delete
                };
            }
        }

        /// <summary>
        /// Permissions for recruiter role
        /// </summary>
        public static List<string> RecruiterRolePermissions
        {
            get
            {
                return new List<string>()
                {
                    //Group0PermissionsConst.Pages_Group0_Demos,
                    Group0PermissionsConst.Pages_Group0_Demos_Create,
                    Group0PermissionsConst.Pages_Group0_Demos_Update,
                    Group0PermissionsConst.Pages_Group0_Demos_Delete
                };
            }
        }
    }
}
