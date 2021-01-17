using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using SE347.L11_HelloWork.Entities;

namespace Group1.SE347.L11_HelloWork.Application.Services.CompanyService
{
    public class CompanyDto : EntityDto<int>
    {
        public CompanyDto(Company company)
        {
            if (company == null)
            {
                this.Id = 1;
                this.Name = "null company";
                this.Address = "null addr";
                this.Email = "null email";
                this.PhoneNumber = "null pn";
                this.Website = "null website";
                this.Expertise = "null major";
                this.HeadcountLimit = 10;
                return;
            }

            /// NOTE: Maybe refactor to AutoMapper later...?
            this.Id = company.Id;
            this.Name = company.Name;
            this.Address = company.Address;
            this.Email = company.Email;
            this.PhoneNumber = company.PhoneNumber;
            this.Website = company.Website;
            this.Expertise = company.Expertise;
            this.HeadcountLimit = company.HeadcountLimit;
        }

        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Address { get; set; }
        public string? Website { get; set; }
        public string? Expertise { get; set; }
        public int? HeadcountLimit { get; set; }
    }
}
