using Abp.Domain.Repositories;
using Group1.SE347.L11_HelloWork.Application;
using SE347.L11_HelloWork;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using SE347.L11_HelloWork.Entities;
using Abp.Application.Services.Dto;
using Abp.Authorization;

namespace Group1.SE347.L11_HelloWork.Application.Services.CompanyService
{
    public class CompanyAppService : Group1AppServiceBase, ICompanyAppService
    {
        private readonly IRepository<Company> _CompanyRepo;

        public CompanyAppService(IRepository<Company> companyRepo)
        {
            _CompanyRepo = companyRepo;
        }

        public CompanyAppService()
        {

        }

        [AbpAllowAnonymous]
        public async Task<CompanyDto> GetCompany(EntityDto<int> input)
        {
            var company = await _CompanyRepo.GetAsync(input.Id);
            return new CompanyDto(company);
        }

        [AbpAllowAnonymous]
        public async Task<CompanyDto> UpdateCompany(EntityDto<int> input)
        {
            var company = await _CompanyRepo.GetAsync(input.Id);
            var companyDto = input as CompanyDto;

            // Note: This is an ugly way to map between entity and dto
            // TODO: create a map between entity and dto
            company.Name = companyDto.Name;
            company.Address = companyDto.Address;
            company.Email = companyDto.Email;
            company.PhoneNumber = companyDto.PhoneNumber;
            company.Website = companyDto.Website;
            company.Expertise = companyDto.Expertise;
            company.HeadcountLimit = companyDto.HeadcountLimit;

            var savedCompany = await _CompanyRepo.UpdateAsync(company);
            return new CompanyDto(savedCompany);
        }

        [AbpAllowAnonymous]
        public async Task<CompanyDto> AddCompany(EntityDto<int> input)
        {
            var company = new Company();
            var companyDto = input as CompanyDto;

            // Note: This is an ugly way to map between entity and dto
            // TODO: create a map between entity and dto
            company.Name = companyDto.Name;
            company.Address = companyDto.Address;
            company.Email = companyDto.Email;
            company.PhoneNumber = companyDto.PhoneNumber;
            company.Website = companyDto.Website;
            company.Expertise = companyDto.Expertise;
            company.HeadcountLimit = companyDto.HeadcountLimit;

            var addedCompany = await _CompanyRepo.InsertAsync(company);
            await CurrentUnitOfWork.SaveChangesAsync();
            return new CompanyDto(addedCompany);
        }
    }
}
