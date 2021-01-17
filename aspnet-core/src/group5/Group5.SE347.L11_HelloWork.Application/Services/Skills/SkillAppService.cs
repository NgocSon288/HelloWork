using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Group5.SE347.L11_HelloWork.Application.Services.Skills.Dto;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.Skills
{
    public class SkillAppService : Group5AppServiceBase, ISkillAppService
    {
        private readonly IRepository<Skill> _skillRepo;

        public SkillAppService(IRepository<Skill> skillRepo)
        {
            _skillRepo = skillRepo;
        }

        [AbpAllowAnonymous]
        public async Task<ListResultDto<SkillDto>> GetSkillAsync(EntityDto<int> input)
        {
            var skills = await _skillRepo.GetAllListAsync(sk => sk.IDJobSeeker == input.Id);
            return new ListResultDto<SkillDto>(
                skills.Select(s => ObjectMapper.Map<SkillDto>(s)).ToList()
                );
        }
        [AbpAllowAnonymous]
        public async Task<SkillDto> CreateSkillAsync(CreateSkillDto input)
        {
            var skill = ObjectMapper.Map<Skill>(input);
            skill = await _skillRepo.InsertAsync(skill);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<SkillDto>(skill);
        }
        [AbpAllowAnonymous]
        public async Task<SkillDto> UpdateSkillAsync(UpdateSkillDto input)
        {
            var skill = await _skillRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, skill);
            var savedSkill = await _skillRepo.UpdateAsync(skill);
            return ObjectMapper.Map<SkillDto>(savedSkill);
        }
        [AbpAllowAnonymous]
        public async Task DeleteSkillAsync(EntityDto<int> input)
        {
            await _skillRepo.DeleteAsync(input.Id);
        }
    }
}
