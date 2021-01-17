using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using SE347.L11_HelloWork;
using Group6.SE347.L11_HelloWork.Application.Services.Recruitments.Dto;
using System.Linq;
using System.Threading.Tasks;
using Group6.SE347.L11_HelloWork.Application.Services.Expertises.Dto;
using System.Collections.Generic;
using Abp.Logging;
using System.Diagnostics;
using Abp.Notifications;
using System.Runtime.InteropServices.ComTypes;

namespace Group6.SE347.L11_HelloWork.Application.Services.Recruitments
{
    public class RecruitmentAppService : Group6AppServiceBase, IRecruitmentAppService
    {
        private readonly IRepository<Recruitment> _recruitmentRepo;
        private readonly IRepository<SavedRecruitment> _savedRecruitmentRepo;
        private readonly IRepository<Expertise> _expertiseRepo;
        private readonly IRepository<ExpertiseRecruitment> _expertiseRecruitmentRepo;

        public RecruitmentAppService(IRepository<Recruitment> recruitmentRepo, IRepository<Expertise> expertiseRepo, IRepository<ExpertiseRecruitment> expertiseRecruitmentRepo, IRepository<SavedRecruitment> savedRecruitmentRepo)
        {
            _recruitmentRepo = recruitmentRepo;
            _expertiseRepo = expertiseRepo;
            _expertiseRecruitmentRepo = expertiseRecruitmentRepo;
            _savedRecruitmentRepo = savedRecruitmentRepo;
        }

        //  [AbpAuthorize(PermissionNames.Pages_Group6_Recruitment_Create)]
        public async Task<RecruitmentDto> CreateRecruitmentAsync(CreateRecruitmentDto input)
        {
            var recruitment = ObjectMapper.Map<Recruitment>(input);
            foreach (ExpertiseForCRcrmDto ept in input.Expertises)
            {
                Expertise expertise = await _expertiseRepo.FirstOrDefaultAsync(e => e.Id == ept.Id);
                //System.Diagnostics.Debug.WriteLine("[InForeach]\t" +ept.Id + "\n");
                if (expertise != null)
                {
                   // System.Diagnostics.Debug.WriteLine("[NotNull]\t" + ept.Id + "\n");
                    ExpertiseRecruitment er = new ExpertiseRecruitment { 
                                                Expertise = expertise, ExpertiseId = expertise.Id, 
                                                Recruitment = recruitment, RecruitmentId = recruitment.Id };
                    await _expertiseRecruitmentRepo.InsertAsync(er);
                }
            }
            recruitment = await _recruitmentRepo.InsertAsync(recruitment);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<RecruitmentDto>(recruitment);
        }

        [AbpAllowAnonymous]
        public async Task<GetRecruitmentDto> GetRecruitmentAsync(EntityDto<int> input)
        {
            var recruitment = await _recruitmentRepo.GetAll()
                                                    .Include(rc => rc.ExpertiseRecruitments)
                                                    .ThenInclude(er => er.Expertise)
                                                    .FirstOrDefaultAsync(rc => rc.Id == input.Id);
            //Recruitment dbRecruitment = await _recruitmentRepo.Get()
            return ObjectMapper.Map<GetRecruitmentDto>(recruitment);
        }


       // [AbpAuthorize(PermissionNames.Pages_Group6_Recruitment_Create)]
        public async Task<RecruitmentDto> UpdateRecruitmentAsync(UpdateRecruitmentDto input)
        {
            var recruitment = await _recruitmentRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, recruitment);
            List<ExpertiseRecruitment> List_expertiseRecruitments = _expertiseRecruitmentRepo.GetAll()
                                                                    .Where(er => er.RecruitmentId == input.Id).ToList();
            foreach (ExpertiseRecruitment temp in List_expertiseRecruitments)
            {
                System.Diagnostics.Debug.WriteLine("[INFO]\t" + temp.Id + "\n");
                await _expertiseRecruitmentRepo.DeleteAsync(temp);
            }
            foreach (ExpertiseDto ept in input.Expertises)
            {
                Expertise expertise = await _expertiseRepo.FirstOrDefaultAsync(e => e.Id == ept.Id);
                if (expertise != null)
                {
                        ExpertiseRecruitment er = new ExpertiseRecruitment
                        {
                            Expertise = expertise,
                            ExpertiseId = expertise.Id,
                            Recruitment = recruitment,
                            RecruitmentId = recruitment.Id
                        };
                        await _expertiseRecruitmentRepo.InsertAsync(er);
                }
            }
            var savedRecruitment = await _recruitmentRepo.UpdateAsync(recruitment);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<RecruitmentDto>(savedRecruitment);
        }
        [AbpAllowAnonymous]
        public async Task<SavedRecruitmentDto> CreateSavedRecruitmentAsync(CreateSavedRecruitmentDto input)
        {
            var savedrecruitment = ObjectMapper.Map<SavedRecruitment>(input);
            savedrecruitment = await _savedRecruitmentRepo.InsertAsync(savedrecruitment);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<SavedRecruitmentDto>(savedrecruitment);
        }
    }
}
