using Group1.SE347.L11_HelloWork.Controllers;
using System;
using System.Collections.Generic;
using System.Text;
using Group1.SE347.L11_HelloWork.Application.Services.CompanyService;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;

namespace Group1.SE347.L11_HelloWork.Web.Core.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CompanyController : AbpController
    {
        private readonly ICompanyAppService _companyService;
        public CompanyController(ICompanyAppService companyService)
        {
            _companyService = companyService;
        }

        [HttpGet]
        public async Task<IActionResult> Test()
        {
            return Ok("ok");
        }

        [HttpGet("{id}", Name = "GetCompanies")]
        public async Task<CompanyDto> Get(int id)
        {
            var companyDto = await _companyService.GetCompany(new EntityDto<int>(id));
            return companyDto;
        }

        [HttpPut]
        public async Task<CompanyDto> Update(CompanyDto company)
        {
            var companyDto = await _companyService.UpdateCompany(company);

            if (companyDto == null)
                return null;

            return companyDto;
        }

        [HttpPost]
        public async Task<IActionResult> Add(CompanyDto company)
        {
            var newCompany = await _companyService.AddCompany(company);
            return CreatedAtRoute("GetCompanies", new { id = newCompany.Id }, newCompany);
        }
    }
}