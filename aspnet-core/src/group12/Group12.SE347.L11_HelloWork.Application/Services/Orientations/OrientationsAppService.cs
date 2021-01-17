using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SE347.L11_HelloWork.Entities;
using Microsoft.EntityFrameworkCore;

namespace Group12.SE347.L11_HelloWork.Application.Services.Orientations
{
    public class OrientationsAppService : Group12AppServiceBase, IOrientationsAppService
    {
        private readonly IRepository<Orientation> _repository;

        public OrientationsAppService(IRepository<Orientation> repository)
        {
            _repository = repository;
        }

        public async Task<List<string>> GetAllAsync()
        {
            var results = _repository.GetAll().Select(x => x.OrientationName).Distinct();
            return await results.ToListAsync();
        }
    }
}
