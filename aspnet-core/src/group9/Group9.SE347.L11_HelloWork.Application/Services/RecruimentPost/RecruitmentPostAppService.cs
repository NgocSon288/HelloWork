using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Domain.Repositories;
using Group9.SE347.L11_HelloWork.Application.Services.Dto;
using Microsoft.AspNetCore.Authorization;
using SE347.L11_HelloWork.Entities;
using Abp.Extensions;

using Abp.Authorization;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization;

namespace Group9.SE347.L11_HelloWork.Application.Services.RecruimentPost
{
    public class RecruitmentPostAppService : Group9AppServiceBase, IRecruitmentPostAppService
    {
        private readonly IRepository<Recruitment> _RecruimentpostRepo;

        public RecruitmentPostAppService(IRepository<Recruitment> recruipost)
        {
            this._RecruimentpostRepo = recruipost;
        }

        [AllowAnonymous]
        public async Task<ListResultDto<RecruitmentDto>> GetRecruitmentPostAsync()
        {

            var repost = await _RecruimentpostRepo.GetAllListAsync();

            return new ListResultDto<RecruitmentDto>(
                repost.Select(sp => ObjectMapper.Map<RecruitmentDto>(sp)).ToList()
            );
        }
        [AllowAnonymous]
        public async Task<RecruitmentDto> FilterRecruitmentAsync(EntityDto<int> input)
        {
            var recruitment = await _RecruimentpostRepo.GetAsync(input.Id);
            return ObjectMapper.Map<RecruitmentDto>(recruitment);
        }
        [AllowAnonymous]
        public async Task<PagedResultDto<RecruitmentDto>> SearchRecruitmentAsync(RecruitmentFilter input)
        {
            var query = _RecruimentpostRepo.GetAll();

            if (!input.Name.IsNullOrWhiteSpace())
                query = query.Where(re => re.Name.Contains(input.Name));
            if (!input.Requirement.IsNullOrWhiteSpace())
                query = query.Where(re => re.Requirement.Contains(input.Requirement));
            if (!input.SalaryRange.IsNullOrWhiteSpace())
                query = query.Where(re => re.SalaryRange.Contains(input.SalaryRange));
            if (!input.State.IsNullOrWhiteSpace())
                query = query.Where(re => re.State.Contains(input.State));
            if (!input.UrgentLevel.IsNullOrWhiteSpace())
                query = query.Where(re => re.UrgentLevel.Contains(input.UrgentLevel));
            if (!input.WayOfWork.IsNullOrWhiteSpace())
                query = query.Where(re => re.WayOfWork.Contains(input.WayOfWork));

            var totalCount = await query.CountAsync();
            var recruitments = await query.ToListAsync();

            return new PagedResultDto<RecruitmentDto>(
                totalCount,
                recruitments.Select(jt => ObjectMapper.Map<RecruitmentDto>(jt)).ToList()
            );
        }
        [AbpAuthorize(PermissionNames.Pages_RecruitmentPost_Delete)]
        // [AllowAnonymous]
        public async Task DeleteRecruitmentAsync(EntityDto<int> input)
        {
            await _RecruimentpostRepo.DeleteAsync(input.Id);
        }

        [AbpAuthorize(PermissionNames.Pages_RecruitmentPost_Update)]
        public async Task<RecruitmentDto> DisableRecruitmentAsync(RecruitmentDisable input)
        {
            var recruitment = await _RecruimentpostRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, recruitment);
            var savedRecruitment = await _RecruimentpostRepo.UpdateAsync(recruitment);
            return ObjectMapper.Map<RecruitmentDto>(savedRecruitment);
        }
        public async Task<PagedResultDto<RecruitmentDto>> GetRecruitmentPostByUserAsync(RecruitmentByUser recruitmentByUser)
        {
            var query = _RecruimentpostRepo.GetAll();
            query = query.Where(re => re.CreatorUserId == recruitmentByUser.CreatorUserId);
            var totalCount = await query.CountAsync();
            var recruitment = await query.ToListAsync();

            return new PagedResultDto<RecruitmentDto>(
                totalCount,
                recruitment.Select(jt => ObjectMapper.Map<RecruitmentDto>(jt)).ToList()
            );
        }
    }
}
