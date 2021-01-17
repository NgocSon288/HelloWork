using Abp.Application.Services;
using SE347.L11_HelloWork.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using Group5.SE347.L11_HelloWork.Application.Services.JobSeekers.Dto;
using Abp.Application.Services.Dto;

namespace Group5.SE347.L11_HelloWork.Application.Services.JobSeekers
{
    public interface IJobSeekerAppService : IApplicationService
    {
        Task<JobSeekerDto> CreateJobSeekerAsync(CreateJobSeekerInputDto input);
        Task<JobSeekerDto> GetJobSeekerAsync(EntityDto<int> input);
        Task<JobSeekerDto> UpdateJobSeekerAsync(UpdateJobSeekerDto input);
        Task DeleteJobSeekerAsync(EntityDto<int> input);
        Task<JobSeekerShortDto> GetJobSeekerShortAsync(EntityDto<int> input);
    }
}
