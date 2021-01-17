using System.Linq;
using Microsoft.EntityFrameworkCore;
using Abp.Authorization;
using Abp.Authorization.Roles;
using Abp.Authorization.Users;
using Abp.MultiTenancy;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Authorization.Roles;
using SE347.L11_HelloWork.Authorization.Users;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace SE347.L11_HelloWork.EntityFrameworkCore.Seed.Host
{
    public class HostRoleAndUserCreator
    {
        private readonly L11_HelloWorkDbContext _context;

        public HostRoleAndUserCreator(L11_HelloWorkDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            CreateHostRoleAndUsers();
        }

        private void CreateHostRoleAndUsers()
        {
            ConfigAdminRole();
            ConfigJobseekerRole();
            ConfigRecruiterRole();
        }

        private void ConfigAdminRole()
        {
            // Admin role for host

            var adminRoleForHost = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == null && r.Name == StaticRoleNames.Host.Admin);
            if (adminRoleForHost == null)
            {
                adminRoleForHost = _context.Roles.Add(new Role(null, StaticRoleNames.Host.Admin, StaticRoleNames.Host.Admin) { IsStatic = true, IsDefault = true }).Entity;
                _context.SaveChanges();
            }

            // Grant all permissions to admin role for host

            var grantedPermissions = _context.Permissions.IgnoreQueryFilters()
                .OfType<RolePermissionSetting>()
                .Where(p => p.TenantId == null && p.RoleId == adminRoleForHost.Id)
                .Select(p => p.Name)
                .ToList();

            var permissions = PermissionFinder
                .GetAllPermissions(new L11_HelloWorkAuthorizationProvider())
                .Where(p => p.MultiTenancySides.HasFlag(MultiTenancySides.Host) &&
                            !grantedPermissions.Contains(p.Name))
                .ToList();

            if (permissions.Any())
            {
                _context.Permissions.AddRange(
                    permissions.Select(permission => new RolePermissionSetting
                    {
                        TenantId = null,
                        Name = permission.Name,
                        IsGranted = true,
                        RoleId = adminRoleForHost.Id
                    })
                );
                _context.SaveChanges();
            }

            // Admin user for host

            var adminUserForHost = _context.Users.IgnoreQueryFilters().FirstOrDefault(u => u.TenantId == null && u.UserName == AbpUserBase.AdminUserName);
            if (adminUserForHost == null)
            {
                var user = new User
                {
                    TenantId = null,
                    UserName = AbpUserBase.AdminUserName,
                    Name = "admin",
                    Surname = "admin",
                    EmailAddress = "admin@aspnetboilerplate.com",
                    IsEmailConfirmed = true,
                    IsActive = true
                };

                user.Password = new PasswordHasher<User>(new OptionsWrapper<PasswordHasherOptions>(new PasswordHasherOptions())).HashPassword(user, "123qwe");
                user.SetNormalizedNames();

                adminUserForHost = _context.Users.Add(user).Entity;
                _context.SaveChanges();

                // Assign Admin role to admin user
                _context.UserRoles.Add(new UserRole(null, adminUserForHost.Id, adminRoleForHost.Id));
                _context.SaveChanges();
            }
        }

        private void ConfigJobseekerRole()
        {
            // Jobseeker role for host

            var jobseekerRoleForHost = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == null && r.Name == StaticRoleNames.Host.Jobseeker);
            if (jobseekerRoleForHost == null)
            {
                jobseekerRoleForHost = _context.Roles.Add(new Role(null, StaticRoleNames.Host.Jobseeker, StaticRoleNames.Host.Jobseeker) { IsStatic = true }).Entity;
                _context.SaveChanges();
            }

            // Grant allowed permissions to jobseeker role for host

            var grantedPermissions = _context.Permissions.IgnoreQueryFilters()
                .OfType<RolePermissionSetting>()
                .Where(p => p.TenantId == null && p.RoleId == jobseekerRoleForHost.Id)
                .Select(p => p.Name)
                .ToList();

            var permissions = RolePermissions.JobSeekerRolePermissions
                .Where(p => !grantedPermissions.Contains(p))
                .ToList();

            if (permissions.Any())
            {
                _context.Permissions.AddRange(
                    permissions.Select(permission => new RolePermissionSetting
                    {
                        TenantId = null,
                        Name = permission,
                        IsGranted = true,
                        RoleId = jobseekerRoleForHost.Id
                    })
                );
                _context.SaveChanges();
            }

            // Jobseeker user for host testing

            var jobseekerUserForHost = _context.Users.IgnoreQueryFilters().FirstOrDefault(u => u.TenantId == null && u.UserName == "jobseeker");
            if (jobseekerUserForHost == null)
            {
                var user = new User
                {
                    TenantId = null,
                    UserName = "jobseeker",
                    Name = "jobseeker",
                    Surname = "jobseeker",
                    EmailAddress = "jobseeker@aspnetboilerplate.com",
                    IsEmailConfirmed = true,
                    IsActive = true
                };

                user.Password = new PasswordHasher<User>(new OptionsWrapper<PasswordHasherOptions>(new PasswordHasherOptions())).HashPassword(user, "123qwe");
                user.SetNormalizedNames();

                jobseekerUserForHost = _context.Users.Add(user).Entity;
                _context.SaveChanges();

                // Assign Jobseeker role to jobseeker user
                _context.UserRoles.Add(new UserRole(null, jobseekerUserForHost.Id, jobseekerRoleForHost.Id));
                _context.SaveChanges();
            }
        }

        private void ConfigRecruiterRole()
        {
            // Recruiter role for host

            var recruiterRoleForHost = _context.Roles.IgnoreQueryFilters().FirstOrDefault(r => r.TenantId == null && r.Name == StaticRoleNames.Host.Recruiter);
            if (recruiterRoleForHost == null)
            {
                recruiterRoleForHost = _context.Roles.Add(new Role(null, StaticRoleNames.Host.Recruiter, StaticRoleNames.Host.Recruiter) { IsStatic = true }).Entity;
                _context.SaveChanges();
            }

            // Grant allowed permissions to recruiter role for host

            var grantedPermissions = _context.Permissions.IgnoreQueryFilters()
                .OfType<RolePermissionSetting>()
                .Where(p => p.TenantId == null && p.RoleId == recruiterRoleForHost.Id)
                .Select(p => p.Name)
                .ToList();

            var permissions = RolePermissions.RecruiterRolePermissions
                .Where(p => !grantedPermissions.Contains(p))
                .ToList();

            if (permissions.Any())
            {
                _context.Permissions.AddRange(
                    permissions.Select(permission => new RolePermissionSetting
                    {
                        TenantId = null,
                        Name = permission,
                        IsGranted = true,
                        RoleId = recruiterRoleForHost.Id
                    })
                );
                _context.SaveChanges();
            }

            // Recruiter user for host testing

            var recruiterUserForHost = _context.Users.IgnoreQueryFilters().FirstOrDefault(u => u.TenantId == null && u.UserName == "recruiter");
            if (recruiterUserForHost == null)
            {
                var user = new User
                {
                    TenantId = null,
                    UserName = "recruiter",
                    Name = "recruiter",
                    Surname = "recruiter",
                    EmailAddress = "recruiter@aspnetboilerplate.com",
                    IsEmailConfirmed = true,
                    IsActive = true
                };

                user.Password = new PasswordHasher<User>(new OptionsWrapper<PasswordHasherOptions>(new PasswordHasherOptions())).HashPassword(user, "123qwe");
                user.SetNormalizedNames();

                recruiterUserForHost = _context.Users.Add(user).Entity;
                _context.SaveChanges();

                // Assign Recruiter role to recruiter user
                _context.UserRoles.Add(new UserRole(null, recruiterUserForHost.Id, recruiterRoleForHost.Id));
                _context.SaveChanges();
            }
        }
    }
}
