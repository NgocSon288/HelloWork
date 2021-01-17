using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using SE347.L11_HelloWork.Roles.Dto;
using SE347.L11_HelloWork.Users.Dto;

namespace SE347.L11_HelloWork.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedUserResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();

        Task ChangeLanguage(ChangeUserLanguageDto input);

        Task<bool> ChangePassword(ChangePasswordDto input);
    }
}
