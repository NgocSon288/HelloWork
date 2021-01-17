using System;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using DevExpress.Xpo;

namespace Group1.SE347.L11_HelloWork.Application.Services.RecruiterService
{
    public interface IRecruiterAppService: IApplicationService
    {
        Task<RecruiterDto> GetRecuiter(EntityDto<int> input);
    }

}