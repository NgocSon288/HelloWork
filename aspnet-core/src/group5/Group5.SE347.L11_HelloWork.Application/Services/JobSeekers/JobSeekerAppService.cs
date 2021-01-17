using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Group5.SE347.L11_HelloWork.Application.Services.JobSeekers.Dto;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group5.SE347.L11_HelloWork.Application.Services.JobSeekers
{
    public class JobSeekerAppService : Group5AppServiceBase, IJobSeekerAppService
    {
        private readonly IRepository<JobSeeker> _jobSeekerRepo;

        public JobSeekerAppService(IRepository<JobSeeker> jobSeekerRepo)
        {
            _jobSeekerRepo = jobSeekerRepo;
        }

        [AbpAllowAnonymous]
        public async Task<JobSeekerDto> CreateJobSeekerAsync(CreateJobSeekerInputDto input)
        {
            var jobSeeker = ObjectMapper.Map<JobSeeker>(input);
            jobSeeker = await _jobSeekerRepo.InsertAsync(jobSeeker);
            Console.WriteLine("ZZZ");
            await CurrentUnitOfWork.SaveChangesAsync();
            return ObjectMapper.Map<JobSeekerDto>(jobSeeker);
        }

        [AbpAllowAnonymous]
        public async Task<JobSeekerDto> GetJobSeekerAsync(EntityDto<int> input)
        {
            var jobSeeker = await _jobSeekerRepo.GetAsync(input.Id);
            return ObjectMapper.Map<JobSeekerDto>(jobSeeker);
        }

        [AbpAllowAnonymous]
        public async Task<JobSeekerDto> UpdateJobSeekerAsync(UpdateJobSeekerDto input)
        {
            var jobSeeker = await _jobSeekerRepo.GetAsync(input.Id);
            ObjectMapper.Map(input, jobSeeker);
            var savedJobSeeker = await _jobSeekerRepo.UpdateAsync(jobSeeker);
            return ObjectMapper.Map<JobSeekerDto>(savedJobSeeker);
        }
        [AbpAllowAnonymous]
        public async Task DeleteJobSeekerAsync(EntityDto<int> input)
        {
            await _jobSeekerRepo.DeleteAsync(input.Id);
        }
        [AbpAllowAnonymous]
        public async Task<JobSeekerShortDto> GetJobSeekerShortAsync(EntityDto<int> input)
        {
            var jobSeeker = await _jobSeekerRepo.GetAsync(input.Id);
            return ObjectMapper.Map<JobSeekerShortDto>(jobSeeker);
        }
    }
}
