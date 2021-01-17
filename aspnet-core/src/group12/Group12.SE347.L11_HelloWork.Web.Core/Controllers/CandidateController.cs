using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group12.SE347.L11_HelloWork.Application.Services.SearchCandidate;
using Group12.SE347.L11_HelloWork.Application.Services.SearchCandidate.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Group12.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CandidateController : AbpController
    {
        private readonly ISearchCandidateAppService _searchCandidateAppService;

        public CandidateController(ISearchCandidateAppService searchCandidateAppService)
        {
            _searchCandidateAppService = searchCandidateAppService;
        }

        [HttpPost]
        public async Task<ListResultDto<CandidateInfoDto>> Get(CandidateFilterDto filter)
        {
            return await _searchCandidateAppService.GetCandidates(filter);
        }
    }
}