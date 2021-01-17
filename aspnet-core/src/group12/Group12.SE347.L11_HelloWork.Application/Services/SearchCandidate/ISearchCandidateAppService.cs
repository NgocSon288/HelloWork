using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group12.SE347.L11_HelloWork.Application.Services.SearchCandidate.Dto;
using System.Threading.Tasks;

namespace Group12.SE347.L11_HelloWork.Application.Services.SearchCandidate
{
    public interface ISearchCandidateAppService : IApplicationService
    {
        Task<ListResultDto<CandidateInfoDto>> GetCandidates(CandidateFilterDto input);
    }
}