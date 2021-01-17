using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group9.SE347.L11_HelloWork.Application.Services.Dto;
using Group9.SE347.L11_HelloWork.Application.Services.RecruimentPost;
using Microsoft.AspNetCore.Mvc;

namespace Group9.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RecruitmentPostsController : AbpController
    {
        private readonly IRecruitmentPostAppService _recruitPostAppService;

        public RecruitmentPostsController(IRecruitmentPostAppService recruitPostAppService)
        {
            _recruitPostAppService = recruitPostAppService;
        }

        [HttpGet]
        public async Task<ListResultDto<RecruitmentDto>> Get()
        {
            return await _recruitPostAppService.GetRecruitmentPostAsync();
        }
        [HttpGet("{id}", Name = "Filter")]
        public async Task<RecruitmentDto> Filter(int id)
        {
            return await _recruitPostAppService.FilterRecruitmentAsync(new EntityDto<int>(id));
        }
        [HttpGet]
        public async Task<PagedResultDto<RecruitmentDto>> GetWithFilter(String Name, String Position, String WayOfWork, String SalaryRange, String UrgentLevel, String Requirement, String State)
        {
            return await _recruitPostAppService.SearchRecruitmentAsync(new RecruitmentFilter() { Name = Name, Position = Position, WayOfWork = WayOfWork, SalaryRange = SalaryRange, UrgentLevel = UrgentLevel, Requirement = Requirement, State = State });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _recruitPostAppService.DeleteRecruitmentAsync(new EntityDto<int>(id));
            return NoContent();
        }
        [HttpPut]
        public async Task<RecruitmentDto> Disable(RecruitmentDisable input)
        {
            return await _recruitPostAppService.DisableRecruitmentAsync(input);
        }
        [HttpGet("{CreatorUserId}", Name = "GetListByUser")]
        public async Task<PagedResultDto<RecruitmentDto>> GetListByUser(long CreatorUserId)
        {
            return await _recruitPostAppService.GetRecruitmentPostByUserAsync(new RecruitmentByUser() { CreatorUserId = CreatorUserId });
        }
        // [HttpGet]
        // public String GetTest()
        // {
        //     return "Test";
        // }
    }
}
