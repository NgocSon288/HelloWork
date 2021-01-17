using Abp.AutoMapper;
using SE347.L11_HelloWork.Authorization.Users;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group3.SE347.L11_HelloWork.Application.Services._UserService.Dto
{
    public class CreateUserInputDto
    {
        public string UserName;
        public string Password;
        public string FullName;
        public string Email;
        public string Phone;
        public string Birthday;
        public string Province;
        public string Address;
        public string IdentifyNumber;
    }
}
