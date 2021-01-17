using Abp.Authorization.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using SE347.L11_HelloWork.Authorization.Users;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Text;
using SE347.L11_HelloWork.Authorization.Roles;
using Abp.Authorization.Roles;
using SE347.L11_HelloWork.Authorization;

namespace SE347.L11_HelloWork.EntityFrameworkCore.Seed.Host
{
    public class DefaultDataGroup10Creator
    {
        private readonly L11_HelloWorkDbContext _context;
        public DefaultDataGroup10Creator(L11_HelloWorkDbContext context)
        {
            _context = context;
        }
        public void Create()
        {
            ConfigManageAdminRole();
            var FlagUserInfor = _context.UserInfos.IgnoreQueryFilters().FirstOrDefault(u => u.Key== "FlagSeedUserInfo");
            if (FlagUserInfor == null)
            {
                _context.UserInfos.Add(new UserInfo() { UserId = -1, Key = "FlagSeedUserInfo", Value = "-1" });
                _context.SaveChanges();

                for (int i = 0; i < 5; i++)
                {
                    var user = new User
                    {
                        TenantId = null,
                        UserName = "Nhatuyendung" + i,
                        Name = "NTD" + i,
                        Surname = "NTD" + i,
                        EmailAddress = "NTD" + i + "@gmail.com",
                        IsEmailConfirmed = true,
                        IsActive = true
                    };
                    user.Password = new PasswordHasher<User>(new OptionsWrapper<PasswordHasherOptions>(new PasswordHasherOptions())).HashPassword(user, "123qwe");
                    user.SetNormalizedNames();
                    var rs = _context.Users.Add(user).Entity;
                    _context.SaveChanges();
                    _context.UserInfos.Add(new UserInfo() { UserId = rs.Id, Key = "AccountType", Value = "0" });
                    _context.UserInfos.Add(new UserInfo() { UserId = rs.Id, Key = "NTDConfirmStatus", Value = (i % 4).ToString() });
                    _context.UserInfos.Add(new UserInfo() { UserId = rs.Id, Key = "PublicStatus", Value = (i % 2).ToString() });
                    _context.SaveChanges();
                }


                for (int i = 5; i < 10; i++)
                {
                    var user = new User
                    {
                        TenantId = null,
                        UserName = "Nguoitimviec" + i,
                        Name = "NTV" + i,
                        Surname = "NTV" + i,
                        EmailAddress = "NTV" + i + "@gmail.com",
                        IsEmailConfirmed = true,
                        IsActive = true
                    };
                    user.Password = new PasswordHasher<User>(new OptionsWrapper<PasswordHasherOptions>(new PasswordHasherOptions())).HashPassword(user, "123qwe");
                    user.SetNormalizedNames();
                    var rs = _context.Users.Add(user).Entity;
                    _context.SaveChanges();
                    _context.UserInfos.Add(new UserInfo() { UserId = rs.Id, Key = "AccountType", Value = "1" });
                    _context.UserInfos.Add(new UserInfo() { UserId = rs.Id, Key = "NTVConfirmStatus", Value = (i % 4).ToString() });
                    _context.UserInfos.Add(new UserInfo() { UserId = rs.Id, Key = "PublicStatus", Value = (i % 2).ToString() });
                    _context.SaveChanges();
                }
                _context.SaveChanges();

                // Assign Admin role to admin user
                //_context.UserRoles.Add(new UserRole(null, adminUserForHost.Id, adminRoleForHost.Id));
                
            }


        }

        private void ConfigManageAdminRole()
        {
            // Jobseeker role for host

            var ManageAdmin = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == null && r.Name == StaticRoleNames.Host.ManageAdmin);
            if (ManageAdmin == null)
            {
                ManageAdmin = _context.Roles.Add(new Role(null, StaticRoleNames.Host.ManageAdmin, StaticRoleNames.Host.ManageAdmin) { IsStatic = true }).Entity;
                var ManageRegulation = _context.Roles.Add(new Role(null, StaticRoleNames.Host.ManageRegulation, StaticRoleNames.Host.ManageRegulation) { IsStatic = true }).Entity;
                var ManageService = _context.Roles.Add(new Role(null, StaticRoleNames.Host.ManageService, StaticRoleNames.Host.ManageService) { IsStatic = true }).Entity;
                var ManageUser = _context.Roles.Add(new Role(null, StaticRoleNames.Host.ManageUser, StaticRoleNames.Host.ManageUser) { IsStatic = true }).Entity;
                var ManageStatistical = _context.Roles.Add(new Role(null, StaticRoleNames.Host.ManageStatistical, StaticRoleNames.Host.ManageStatistical) { IsStatic = true }).Entity;
                var ManageRecruitment = _context.Roles.Add(new Role(null, StaticRoleNames.Host.ManageRecruitment, StaticRoleNames.Host.ManageRecruitment) { IsStatic = true }).Entity;

                _context.SaveChanges();
            }

            // Grant allowed permissions to jobseeker role for host

            //var grantedPermissions = _context.Permissions.IgnoreQueryFilters()
            //    .OfType<RolePermissionSetting>()
            //    .Where(p => p.TenantId == null && p.RoleId == manageadminForHost.Id)
            //    .Select(p => p.Name)
            //    .ToList();

            //var permissions = RolePermissions.JobSeekerRolePermissions
            //    .Where(p => !grantedPermissions.Contains(p))
            //    .ToList();

            //if (permissions.Any())
            //{
            //    _context.Permissions.AddRange(
            //        permissions.Select(permission => new RolePermissionSetting
            //        {
            //            TenantId = null,
            //            Name = permission,
            //            IsGranted = true,
            //            RoleId = manageadminForHost.Id
            //        })
            //    );
            //    _context.SaveChanges();
            //}

            //// Jobseeker user for host testing

            //var manageadminUserForHost = _context.Users.IgnoreQueryFilters().FirstOrDefault(u => u.TenantId == null && u.UserName == "manageAdmin");
            //if (manageadminUserForHost == null)
            //{
            //    var user = new User
            //    {
            //        TenantId = null,
            //        UserName = "manageAdmin",
            //        Name = "manageAdmin",
            //        Surname = "manageAdmin",
            //        EmailAddress = "manageAdmin@aspnetboilerplate.com",
            //        IsEmailConfirmed = true,
            //        IsActive = true
            //    };

            //    user.Password = new PasswordHasher<User>(new OptionsWrapper<PasswordHasherOptions>(new PasswordHasherOptions())).HashPassword(user, "123qwe");
            //    user.SetNormalizedNames();

            //    manageadminUserForHost = _context.Users.Add(user).Entity;
            //    _context.SaveChanges();

            //    // Assign Jobseeker role to jobseeker user
            //    _context.UserRoles.Add(new UserRole(null, manageadminUserForHost.Id, manageadminForHost.Id));
            //    _context.SaveChanges();
            //}
        }

    }
}
