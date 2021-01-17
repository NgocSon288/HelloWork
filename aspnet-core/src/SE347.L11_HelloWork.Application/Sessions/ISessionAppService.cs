using System.Threading.Tasks;
using Abp.Application.Services;
using SE347.L11_HelloWork.Sessions.Dto;

namespace SE347.L11_HelloWork.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
