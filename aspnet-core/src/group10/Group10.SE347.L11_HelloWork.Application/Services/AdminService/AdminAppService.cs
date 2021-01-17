
using Group10.SE347.L11_HelloWork.Application.Services.UserService.Dto;
using Group10.SE347.L11_HelloWork.Application.Services.AdminService.Dto;
using SE347.L11_HelloWork.Authorization.Users;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SE347.L11_HelloWork.Authorization.Roles;
using System.Text.RegularExpressions;

namespace Group10.SE347.L11_HelloWork.Application.Services.AdminService
{
    public class AdminAppService : Group10AppServiceBase, IAdminAppService
    {
        private readonly UserManager _userManager;
        private readonly RoleManager _roleManager;
        public AdminAppService(UserManager userManager, RoleManager roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }
        //public async Task<IEnumerable<UserDto>> GetAllUser()
        //{
        //    var rs = new List<UserDto>();
        //    var query = _userManager.Users;
        //    var data = await query.Select(x => new UserDto()
        //    {
        //        Name = x.FullName,
        //        isActived = x.IsActive.ToString()
        //    }).ToListAsync();
        //    return data;
        //}
        public async Task<int> CreateAdmin(AdminCreateRequest rq)
        {
            
                var checkUser = _userManager.Users.FirstOrDefault(u => u.UserName == rq.UserName);
                if (checkUser != null)
                    return -1;
                var hasNumber = new Regex(@"[0-9]+");
                var hasUpperChar = new Regex(@"[A-Z]+");
                var hasMinimum8Chars = new Regex(@".{8,}");

                var isValidated = hasNumber.IsMatch(rq.Password) && hasUpperChar.IsMatch(rq.Password) && hasMinimum8Chars.IsMatch(rq.Password);
                if (!isValidated)
                    return -2;
                User user = new User()
                {
                    UserName = rq.UserName,
                    Surname = rq.Name,
                    Name = rq.Name,
                    IsActive = true,
                    EmailAddress = rq.UserName+"@gmail.com"
                };

                var result = await _userManager.CreateAsync(user, rq.Password);
                
                if (rq.RoleNames != null)
                {
                    rq.RoleNames.Add("Admin");
                    CheckErrors(await _userManager.SetRolesAsync(user, rq.RoleNames.ToArray()));
                }
                else
                {
                    var l = new List<string>();
                    l.Add("Admin");
                    CheckErrors(await _userManager.SetRolesAsync(user, l.ToArray()));
                }
                if (result.Succeeded)
                    return 1;
                else
                    return 0;

        }

        public async Task<List<AdminDto>> GetAllAdmin()
        {

            var data = await _userManager.GetUsersInRoleAsync("Admin");
            var rs = data.Select(u =>
            {

                var ad = new AdminDto()
                {
                    Id = u.Id,
                    EmailAddress = u.EmailAddress,
                    UserName = u.UserName,
                    Name = u.Name,
                };

                var Ro  = _userManager.Users.Where(x=>x.Id==u.Id).Select(x=>x.Roles).FirstOrDefault();
                var listIdRo =Ro.Select(q => q.RoleId).ToList();
                ad.Roles = _roleManager.Roles.Where(x => listIdRo.Contains(x.Id)).Select(x => x.Name).ToList();
                return ad;
            }).ToList();
            return rs;
        }

        public async Task<bool> UpdateRole(long UserId, string[] Roles)
        {
            try
            {
                var user = await _userManager.FindByIdAsync(UserId.ToString());
                if (user == null)
                    return false;
                if (Roles != null)
                {
                    CheckErrors(await _userManager.SetRolesAsync(user, Roles));
                }
                return true;
            }
            catch
            {
                return false;
            }

        }
    }
}
