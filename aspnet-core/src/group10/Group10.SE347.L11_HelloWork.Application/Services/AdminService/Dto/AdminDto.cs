using System;
using System.Collections.Generic;
using System.Text;

namespace Group10.SE347.L11_HelloWork.Application.Services.AdminService.Dto
{
    public class AdminDto
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string EmailAddress { get; set; }
        public bool IsActive { get; set; }
        public List<string> Roles  { get; set; }    
        
    }
}
