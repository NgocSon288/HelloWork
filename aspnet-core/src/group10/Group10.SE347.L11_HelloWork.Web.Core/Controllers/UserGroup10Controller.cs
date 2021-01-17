using Abp.AspNetCore.Mvc.Controllers;
using Group10.SE347.L11_HelloWork.Application.Services.AccountClientService;
using Group10.SE347.L11_HelloWork.Application.Services.UserService;
using Group10.SE347.L11_HelloWork.Application.Services.UserService.Dto;
using Group10.SE347.L11_HelloWork.Application.Services.AdminService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Group10.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserGroup10Controller : AbpController
    {
        private readonly IManageUserService _manageUserService;
        private readonly IAdminAppService _adminAppService;
        private readonly IManageAccountClientService _manageAccountClientService;

        public UserGroup10Controller(IManageAccountClientService manageAccountClientService, IManageUserService manageUserService, IAdminAppService adminAppService)
        {
            _manageAccountClientService = manageAccountClientService;
            _manageUserService = manageUserService;
            _adminAppService = adminAppService;
        }

        [HttpGet("GetUser")]
        public async Task<IActionResult> GetAllUser()
        {
            var accs = await _manageAccountClientService.GetAllAcc();
            return Ok(accs);
        }
        [HttpGet("GetAdmin")]
        public async Task<IActionResult> GetAdmin()
        {
            var admins = await _adminAppService.GetAllAdmin();
            return Ok(admins);
        }
        [HttpPost("CreateAdmin")]
        public async Task<IActionResult> CreateAdmin([FromBody] AdminCreateRequest rq)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if(!User.IsInRole("Admin"))
                return StatusCode(403, "You're not admin");
            var rs = await _adminAppService.CreateAdmin(rq);
            switch(rs)
            {
                case 1:
                    return Ok("Create Admin OK");
                case -1:
                    return BadRequest("Username exist");
                case -2:
                    return BadRequest("Password is invalid");
                default:
                    return BadRequest("Create Admin FAILED");
            }
                
        }

        [HttpPost("UpdateRole")]
        public async Task<IActionResult> UpdateRole([FromQuery] long UserId,[FromBody] string[] Roles)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (!User.IsInRole("Admin"))
                return StatusCode(403, "You're not admin");
            var rs = await _adminAppService.UpdateRole(UserId,Roles);
            if (rs)
                return Ok("Update Role OK");
            else
                return BadRequest("Update Role FAILED");
        }

        [HttpPut("Approve")]
        public async Task<IActionResult> XuliDuyet([FromQuery] long Id,[FromQuery] int ConfirmStatus)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (!User.IsInRole("Admin"))
                return StatusCode(403, "You're not admin");
            var rs = await _manageAccountClientService.XuLiDuyet(Id,ConfirmStatus);
            if (rs)
                return Ok("Approve successful");
            else
                return BadRequest("Approve failed");
        }
        [HttpDelete("DeleteUser")]
        public async Task<IActionResult> XoaAccount([FromQuery] long Id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (!User.IsInRole("Admin"))
                return StatusCode(403, "You're not admin");
            var rs = await _manageAccountClientService.XoaAccount(Id);
            if (rs)
                return Ok("Delete user with " +Id.ToString()+" sucessful");
            else
                return BadRequest("Delete failed");
        }
    }
}
