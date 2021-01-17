using Abp.Authorization.Users;
using Abp.Domain.Repositories;
using Group10.SE347.L11_HelloWork.Application.Services.UserService.Dto;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SE347.L11_HelloWork.Authorization.Roles;

namespace Group10.SE347.L11_HelloWork.Application.Services.UserService
{
    public class ManageUserService : Group10AppServiceBase, IManageUserService
    {
        private readonly UserManager _userManager;
        private readonly RoleManager _roleManager;
        public ManageUserService(UserManager userManager, RoleManager roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }
        public async Task<IEnumerable<UserDto>> GetAllUser()
        {
            var rs = new List<UserDto>();
            var query = _userManager.Users;
            var data = await query.Select(x => new UserDto()
            {
                Name = x.FullName,
                isActived = x.IsActive.ToString()
            }).ToListAsync();
            return data;
        }
        
    }
}
