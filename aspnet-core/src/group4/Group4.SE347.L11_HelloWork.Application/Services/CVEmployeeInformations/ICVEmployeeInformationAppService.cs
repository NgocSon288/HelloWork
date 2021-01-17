using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group4.SE347.L11_HelloWork.Application.Services.CVEmployeeInformations.Dto;
using System.Threading.Tasks;


namespace Group4.SE347.L11_HelloWork.Application.Services.CVEmployeeInformations
{
    public interface ICVEmployeeInformationAppService:IApplicationService
    {
        Task<CVEmployeeInformationDto> CreateCVEmPloyeeInformationAsync(CreateCVEmployeeInformationDto input);
    }
}
