using SE347.L11_HelloWork.Roles.Dto;

namespace SE347.L11_HelloWork.Models.TokenAuth
{
    public class AuthenticateResultModel
    {
        public string AccessToken { get; set; }

        public string EncryptedAccessToken { get; set; }

        public int ExpireInSeconds { get; set; }

        public long UserId { get; set; }

        public RoleDto Role { get; set; }
    }
}
