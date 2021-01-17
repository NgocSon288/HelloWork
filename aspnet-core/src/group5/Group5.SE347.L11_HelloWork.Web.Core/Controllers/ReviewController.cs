using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group5.SE347.L11_HelloWork.Application.Services.Reviews;
using Group5.SE347.L11_HelloWork.Application.Services.Reviews.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ReviewController : AbpController
    {
        private readonly IReviewAppService _reviewAppService;

        public ReviewController(IReviewAppService reviewAppService)
        {
            _reviewAppService = reviewAppService;
        }

        [HttpGet("{id}", Name = "GetReview")]
        public async Task<ListResultDto<ReviewDto>> Get(int id)
        {
            return await _reviewAppService.GetReviewAsync(new EntityDto<int>(id));
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateReviewDto input)
        {
            var newReview = await _reviewAppService.CreateReviewAsync(input);
            return CreatedAtRoute("GetReview", new { id = newReview.Id }, newReview);
        }

        [HttpPut]
        public async Task<ReviewDto> Update(UpdateReviewDto input)
        {
            return await _reviewAppService.UpdateReviewAsync(input);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _reviewAppService.DeleteReviewAsync(new EntityDto<int>(id));
            return NoContent();
        }
    }
}