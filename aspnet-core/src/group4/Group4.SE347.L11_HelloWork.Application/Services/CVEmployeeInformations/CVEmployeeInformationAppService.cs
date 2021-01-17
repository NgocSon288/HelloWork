using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using SE347.L11_HelloWork;
using Group4.SE347.L11_HelloWork.Application.Services.CVEmployeeInformations.Dto;
using System.Linq;
using System.Threading.Tasks;
using Group4.SE347.L11_HelloWork.Application.Services.CVEmployeeInformations;
using System.Collections.Generic;
using Abp.Logging;
using System.Diagnostics;
using Abp.Notifications;
using System.Runtime.InteropServices.ComTypes;
using Castle.Core.Logging;

namespace Group4.SE347.L11_HelloWork.Application.Services.CVEmployeeInformations
{
    public class CVEmployeeInformationAppService : Group4AppServiceBase, ICVEmployeeInformationAppService
    {
        private readonly IRepository<CVEmployeeInformation> _cvemployeeInformationRepo;
        private readonly ILogger _logger;

        public CVEmployeeInformationAppService(IRepository<CVEmployeeInformation> cvemployeeInformationRepo)
        {
            _cvemployeeInformationRepo = cvemployeeInformationRepo;
        }

        //  [AbpAuthorize(PermissionNames.Pages_Group6_Recruitment_Create)]
        public async Task<CVEmployeeInformationDto> CreateCVEmPloyeeInformationAsync(CreateCVEmployeeInformationDto input)
        {
            var cv = ObjectMapper.Map<CVEmployeeInformation>(input);
            cv = await _cvemployeeInformationRepo.InsertAsync(cv);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<CVEmployeeInformationDto>(cv);
        }

        /*[AbpAllowAnonymous]
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
        }*/
    }
}
