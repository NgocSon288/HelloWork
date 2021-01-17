using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group9.SE347.L11_HelloWork.Application.Services.Dto;

namespace Group9.SE347.L11_HelloWork.Application.Services.RecruimentPost
{
    public interface IRecruitmentPostAppService : IApplicationService
    {
        Task<ListResultDto<RecruitmentDto>> GetRecruitmentPostAsync();
        Task<RecruitmentDto> FilterRecruitmentAsync(EntityDto<int> input);
        Task<PagedResultDto<RecruitmentDto>> SearchRecruitmentAsync(RecruitmentFilter input);
        Task DeleteRecruitmentAsync(EntityDto<int> input);
        Task<RecruitmentDto> DisableRecruitmentAsync(RecruitmentDisable input);

        Task<PagedResultDto<RecruitmentDto>> GetRecruitmentPostByUserAsync(RecruitmentByUser recruitmentByUser);
    }

}