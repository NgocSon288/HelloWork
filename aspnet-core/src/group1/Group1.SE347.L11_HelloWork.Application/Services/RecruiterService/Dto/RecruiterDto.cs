using System;
using Abp.Application.Services.Dto;
using DevExpress.Xpo;
using SE347.L11_HelloWork.Entities;

namespace Group1.SE347.L11_HelloWork.Application.Services.RecruiterService
{

    public class RecruiterDto: EntityDto<int>
    {
        public RecruiterDto(Recruiter recruiter)
        {
            if(recruiter == null)
            {
                this.IDUser = 1;
                this.IDCurrentPosition = 1;
                this.Name = "null Name";
                this.Email = "null Email";
                this.PhoneNumber = "null PhoneNumber";
                this.Address = "null Address";
                this.NoIDCard = "null NoIDCard";
                this.Image = "null Image";
                this.IDCompany = 1;
            }

            this.IDUser = recruiter.IDUser;
            this.IDCurrentPosition = recruiter.IDCurrentPosition;
            this.Name = recruiter.Name;
            this.Email = recruiter.Email;
            this.PhoneNumber = recruiter.PhoneNumber;
            this.Address = recruiter.Address;
            this.NoIDCard = recruiter.NoIDCard;
            this.Image = recruiter.Image;
            this.IDCompany = recruiter.IDCompany;
        }

        public long? IDUser { get; set; }
        public long? IDCurrentPosition { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string NoIDCard { get; set; }
        public string Image { get; set; }
        public int IDCompany { get; set; }
    }

}