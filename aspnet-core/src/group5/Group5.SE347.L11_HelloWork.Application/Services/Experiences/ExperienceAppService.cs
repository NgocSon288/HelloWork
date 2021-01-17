using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Group5.SE347.L11_HelloWork.Application.Services.Experiences.Dto;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using System.Linq;
using System.Threading.Tasks;


namespace Group5.SE347.L11_HelloWork.Application.Services.Experiences
{
    public class ExperienceAppService : Group5AppServiceBase, IExperienceAppService
    {
        private readonly IRepository<Experience> _experienceRepo;

        public ExperienceAppService(IRepository<Experience> experienceRepo)
        {
            _experienceRepo = experienceRepo;
        }

        [AbpAllowAnonymous]
        public async Task<ListResultDto<ExperienceDto>> GetExperienceAsync(EntityDto<int> input)
        {
            var experiences = await _experienceRepo.GetAllListAsync(exp => exp.IDJobSeeker == input.Id);
            return new ListResultDto<ExperienceDto>(
                experiences.Select(a => ObjectMapper.Map<ExperienceDto>(a)).ToList()
                );
        }
        [AbpAllowAnonymous]
        public async Task<ExperienceDto> CreateExperienceAsync(CreateExperienceDto input)
        {
            var experience = ObjectMapper.Map<Experience>(input);
            experience = await _experienceRepo.InsertAsync(experience);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<ExperienceDto>(experience);
        }
        [AbpAllowAnonymous]
        public async Task<ExperienceDto> UpdateExperienceAsync(UpdateExperienceDto input)
        {
            var experience = await _experienceRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, experience);
            var savedExperience = await _experienceRepo.UpdateAsync(experience);
            return ObjectMapper.Map<ExperienceDto>(savedExperience);
        }
        [AbpAllowAnonymous]
        public async Task DeleteExperienceAsync(EntityDto<int> input)
        {
            await _experienceRepo.DeleteAsync(input.Id);
        }
    }
}
