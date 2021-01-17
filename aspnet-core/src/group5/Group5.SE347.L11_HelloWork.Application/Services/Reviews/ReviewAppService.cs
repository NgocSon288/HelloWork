using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Group5.SE347.L11_HelloWork.Application.Services.Reviews.Dto;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.Reviews
{
    public class ReviewAppService : Group5AppServiceBase, IReviewAppService
    {
        private readonly IRepository<Review> _reviewRepo;

        public ReviewAppService(IRepository<Review> reviewRepo)
        {
            _reviewRepo = reviewRepo;
        }

        [AbpAllowAnonymous]
        public async Task<ListResultDto<ReviewDto>> GetReviewAsync(EntityDto<int> input)
        {
            var reviews = await _reviewRepo.GetAllListAsync(re => re.IDJobSeeker == input.Id);
            return new ListResultDto<ReviewDto>(
                reviews.Select(r => ObjectMapper.Map<ReviewDto>(r)).ToList()
                );
        }
        [AbpAllowAnonymous]
        public async Task<ReviewDto> CreateReviewAsync(CreateReviewDto input)
        {
            var review = ObjectMapper.Map<Review>(input);
            review = await _reviewRepo.InsertAsync(review);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<ReviewDto>(review);
        }
        [AbpAllowAnonymous]
        public async Task<ReviewDto> UpdateReviewAsync(UpdateReviewDto input)
        {
            var review = await _reviewRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, review);
            var savedReview = await _reviewRepo.UpdateAsync(review);
            return ObjectMapper.Map<ReviewDto>(savedReview);
        }
        [AbpAllowAnonymous]
        public async Task DeleteReviewAsync(EntityDto<int> input)
        {
            await _reviewRepo.DeleteAsync(input.Id);
        }
    }
}
