using Abp.AspNetCore.Mvc.Controllers;
using Abp.Domain.Repositories;
using Group3.SE347.L11_HelloWork.Application.Services._UserService;
using Group3.SE347.L11_HelloWork.Application.Services._UserService.Dto;
using Microsoft.AspNetCore.Mvc;
using SE347.L11_HelloWork.Entities;
using SE347.L11_HelloWork.Users;
using SE347.L11_HelloWork.Users.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group3.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/userAccount/[action]")]
    [ApiController]
    public class UserAccountController: AbpController
    {
        private readonly UserAppService _userAppService;
        //private readonly UserAccountService _userAccountService;

        public UserAccountController(UserAppService userAppService)
        {
            Console.WriteLine("Hello!");
            _userAppService = userAppService;
            //_userAccountService = userAccountService;
        }

        [HttpPost]
        public async Task<UserDto> CreateEmployee([FromBody] CreateUserDto input)
        {
                var result = await _userAppService.CreateAsyncBypassPermission(input, true);
                return result;
        }

    }
}
