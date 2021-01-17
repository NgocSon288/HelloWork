using Abp.Domain.Repositories;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Group12.SE347.L11_HelloWork.Application.Services.Expertises
{
    public class ExpertisesAppService : Group12AppServiceBase, IExpertisesAppService
    {
        private readonly IRepository<JobSeeker> _repository;

        public ExpertisesAppService(IRepository<JobSeeker> repository)
        {
            _repository = repository;
        }

        public async Task<List<string>> GetAllAsync()
        {
            var results = _repository.GetAll().Select(x => x.Expertise).Distinct();
            return await results.ToListAsync();
        }
    }
}
