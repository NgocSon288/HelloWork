using System.Collections.Generic;
using Group10.SE347.L11_HelloWork.Application.Services.UserService.Dto;
using Group10.SE347.L11_HelloWork.Application.Services.AdminService.Dto;
using System.Threading.Tasks;


namespace Group10.SE347.L11_HelloWork.Application.Services.AdminService
{
    public interface IAdminAppService
    {
        //public Task<IEnumerable<UserDto>> GetAllUser();
        public Task<int> CreateAdmin(AdminCreateRequest rq);
        public Task<bool> UpdateRole(long UserId,string[] Roles);
        public Task<List<AdminDto>> GetAllAdmin();
    }
}
