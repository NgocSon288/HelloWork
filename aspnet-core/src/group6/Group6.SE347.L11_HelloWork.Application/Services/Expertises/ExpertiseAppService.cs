using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using SE347.L11_HelloWork;
using Group6.SE347.L11_HelloWork.Application.Services.Expertises.Dto;
using System.Linq;
using System.Threading.Tasks;

namespace Group6.SE347.L11_HelloWork.Application.Services.Expertises
{
    public class ExpertiseAppService : Group6AppServiceBase, IExpertiseAppService
    {
        private readonly IRepository<Expertise> _expertiseRepo;

        public ExpertiseAppService(IRepository<Expertise> expertiseRepo)
        {
            _expertiseRepo = expertiseRepo;
        }
         
       // [AbpAuthorize(PermissionNames.Pages_Group6_Expertise_Create)]
        public async Task<ExpertiseDto> CreateExpertiseAsync(CreateExpertiseDto input)
        {
            var expertise = ObjectMapper.Map<Expertise>(input);
            expertise = await _expertiseRepo.InsertAsync(expertise);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<ExpertiseDto>(expertise);
        }
        public async Task DeleteExpertiseAsync(int id)
        {
            var expertise = await _expertiseRepo.GetAsync(id);
            expertise.IsDeleted = true;
            await _expertiseRepo.UpdateAsync(expertise);
            await CurrentUnitOfWork.SaveChangesAsync();
        }
        [AbpAllowAnonymous]
        public async Task<ListResultDto<ExpertiseDto>> GetExpertisesAsync()
        {
            var expertise = await _expertiseRepo.GetAllListAsync();

            return new ListResultDto<ExpertiseDto>(
                expertise.Where(ept => ept.IsDeleted == false).Select(ept => ObjectMapper.Map<ExpertiseDto>(ept)).ToList()
            );
        }
        [AbpAllowAnonymous]
        public async Task<ExpertiseDto> GetExpertiseAsync(EntityDto<int> input)
        {
            var expertise = await _expertiseRepo.GetAsync(input.Id);
            return ObjectMapper.Map<ExpertiseDto>(expertise);
        }

    }
}
