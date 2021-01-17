using Group10.SE347.L11_HelloWork.Application.Services.UserService.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group10.SE347.L11_HelloWork.Application.Services.UserService
{
    public interface IManageUserService
    {
        public Task<IEnumerable<UserDto>> GetAllUser();
    }
}
