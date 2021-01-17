using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Group1.SE347.L11_HelloWork.Application;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group1.SE347.L11_HelloWork.Application.Services.CompanyService
{
    public interface ICompanyAppService : IApplicationService
    {
        /*
        public string CompanyName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Website { get; set; }
        public string Major { get; set; }
        public int Population { get; set; }
        */

        Task<CompanyDto> GetCompany(EntityDto<int> input);
        Task<CompanyDto> UpdateCompany(EntityDto<int> input);
        Task<CompanyDto> AddCompany(EntityDto<int> input);
    }
}
