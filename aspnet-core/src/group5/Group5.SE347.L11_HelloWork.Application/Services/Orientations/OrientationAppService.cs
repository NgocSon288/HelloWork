using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Group5.SE347.L11_HelloWork.Application.Services.Orientations.Dto;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using System.Linq;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.Orientations
{
    public class OrientationAppService : Group5AppServiceBase, IOrientationAppService
    {
        private readonly IRepository<Orientation> _orientationRepo;

        public OrientationAppService(IRepository<Orientation> orientationRepo)
        {
            _orientationRepo = orientationRepo;
        }

        [AbpAllowAnonymous]
        public async Task<ListResultDto<OrientationDto>> GetOrientationAsync(EntityDto<int> input)
        {
            var orientations = await _orientationRepo.GetAllListAsync(orient => orient.IDJobSeeker == input.Id);
            return new ListResultDto<OrientationDto>(
                orientations.Select(o => ObjectMapper.Map<OrientationDto>(o)).ToList()
                );
        }
        [AbpAllowAnonymous]
        public async Task<OrientationDto> CreateOrientationAsync(CreateOrientationDto input)
        {
            var orientation = ObjectMapper.Map<Orientation>(input);
            orientation = await _orientationRepo.InsertAsync(orientation);
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<OrientationDto>(orientation);
        }
        [AbpAllowAnonymous]
        public async Task<OrientationDto> UpdateOrientationAsync(UpdateOrientationDto input)
        {
            var orientation = await _orientationRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, orientation);
            var savedOrientation = await _orientationRepo.UpdateAsync(orientation);
            return ObjectMapper.Map<OrientationDto>(savedOrientation);
        }
        [AbpAllowAnonymous]
        public async Task DeleteOrientationAsync(EntityDto<int> input)
        {
            await _orientationRepo.DeleteAsync(input.Id);
        }
    }
}
