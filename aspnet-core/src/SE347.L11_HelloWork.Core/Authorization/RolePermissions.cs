using SE347.L11_HelloWork.Authorization.Groups.Group0;
using SE347.L11_HelloWork.Authorization.Groups.Group1;
using SE347.L11_HelloWork.Authorization.Groups.Group10;
using SE347.L11_HelloWork.Authorization.Groups.Group11;
using SE347.L11_HelloWork.Authorization.Groups.Group12;
using SE347.L11_HelloWork.Authorization.Groups.Group13;
using SE347.L11_HelloWork.Authorization.Groups.Group14;
using SE347.L11_HelloWork.Authorization.Groups.Group2;
using SE347.L11_HelloWork.Authorization.Groups.Group3;
using SE347.L11_HelloWork.Authorization.Groups.Group4;
using SE347.L11_HelloWork.Authorization.Groups.Group5;
using SE347.L11_HelloWork.Authorization.Groups.Group6;
using SE347.L11_HelloWork.Authorization.Groups.Group7;
using SE347.L11_HelloWork.Authorization.Groups.Group8;
using SE347.L11_HelloWork.Authorization.Groups.Group9;
using System;
using System.Collections.Generic;
using System.Text;

namespace SE347.L11_HelloWork.Authorization
{
    public class RolePermissions
    {
        /// <summary>
        /// Permissions for jobseeker
        /// </summary>
        public static List<string> JobSeekerRolePermissions
        {
            get
            {
                var rolePermissions = new List<string>();

                rolePermissions
                    .AddRangedPermissions(Group0RolePermissions.JobSeekerRolePermissions)
                    .AddRangedPermissions(Group10RolePermissions.JobSeekerRolePermissions);

                return rolePermissions;
            }
        }

        /// <summary>
        /// Permissions for recruiter role
        /// </summary>
        public static List<string> RecruiterRolePermissions
        {
            get
            {
                var rolePermissions = new List<string>();

                rolePermissions
                   .AddRangedPermissions(Group0RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group1RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group2RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group3RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group4RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group5RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group6RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group7RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group8RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group9RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group10RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group11RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group12RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group13RolePermissions.RecruiterRolePermissions)
                   .AddRangedPermissions(Group14RolePermissions.RecruiterRolePermissions);

                return rolePermissions;
            }
        }
    }

    static class ListExtension
    {
        public static List<string> AddRangedPermissions(this List<string> list, List<string> rangedItem){
            list.AddRange(rangedItem);
            return list;
        }
    }
}
