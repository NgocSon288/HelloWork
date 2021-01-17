using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group5.SE347.L11_HelloWork.Application.Services.Reviews.Dto;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.Reviews
{
    public interface IReviewAppService : IApplicationService
    {
        Task<ListResultDto<ReviewDto>> GetReviewAsync(EntityDto<int> input);
        Task<ReviewDto> CreateReviewAsync(CreateReviewDto input);
        Task<ReviewDto> UpdateReviewAsync(UpdateReviewDto input);
        Task DeleteReviewAsync(EntityDto<int> input);
    }
}