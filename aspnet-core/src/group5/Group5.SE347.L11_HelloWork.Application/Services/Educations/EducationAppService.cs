using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using Abp.Authorization;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Group5.SE347.L11_HelloWork.Application.Services.Educations.Dto;
using System.Linq;

namespace Group5.SE347.L11_HelloWork.Application.Services.Educations
{
    public class EducationAppService : Group5AppServiceBase, IEducationAppService
    {
        private readonly IRepository<Education> _educationRepo;
        public EducationAppService(IRepository<Education> educationRepo)
        {
            _educationRepo = educationRepo;
        }

        [AbpAllowAnonymous]
        public async Task<ListResultDto<EducationDto>> GetEducationAsync(EntityDto<int> input)
        {
            var educations = await _educationRepo.GetAllListAsync(edu => edu.IDJobSeeker == input.Id);
            return new ListResultDto<EducationDto>(
                educations.Select(e => ObjectMapper.Map<EducationDto>(e)).ToList()
                );
        }
        [AbpAllowAnonymous]
        public async Task<EducationDto> CreateEducationAsync(CreateEducationDto input)
        {
            var education = ObjectMapper.Map<Education>(input);
            education = await _educationRepo.InsertAsync(education);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<EducationDto>(education);
        }
        [AbpAllowAnonymous]
        public async Task<EducationDto> UpdateEducationAsync(UpdateEducationDto input)
        {
            var education = await _educationRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, education);
            var savedEducation = await _educationRepo.UpdateAsync(education);
            return ObjectMapper.Map<EducationDto>(savedEducation);
        }
        [AbpAllowAnonymous]
        public async Task DeleteEducationAsync(EntityDto<int> input)
        {
            await _educationRepo.DeleteAsync(input.Id);
        }
    }
}
