using Abp.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using Group6.SE347.L11_HelloWork.Application.Services.Recruitments;
using System.Threading.Tasks;
using Group6.SE347.L11_HelloWork.Application.Services.Recruitments.Dto;
using Abp.Application.Services.Dto;

namespace Group6.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RecruitmentsController: Group6ControllerBase
    {

        private readonly IRecruitmentAppService _recruitmentAppService;

        public RecruitmentsController(IRecruitmentAppService recruitmentService)
        {
            _recruitmentAppService = recruitmentService;
        }

        [HttpGet("{id}", Name = "GetRecruitment")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _recruitmentAppService.GetRecruitmentAsync(new EntityDto<int>(id));
            if (result == null)
                return NotFound();
            return Ok(result);
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateRecruitmentDto input)
        {
            var newRecruitment = await _recruitmentAppService.CreateRecruitmentAsync(input);
            return CreatedAtRoute("GetRecruitment", new { id = newRecruitment.Id }, newRecruitment);
        }
        [HttpPut]
        public async Task<IActionResult> Update(UpdateRecruitmentDto input)
        {
            try
            {
                var result = await _recruitmentAppService.UpdateRecruitmentAsync(input);
                return Ok(result);
            }
            catch
            {
                return NotFound();
            }
        }
        [HttpPost]
        public async Task<SavedRecruitmentDto> CreateSavedRecruitment(CreateSavedRecruitmentDto input)
        {
            return await _recruitmentAppService.CreateSavedRecruitmentAsync(input);
        }
    }
}
