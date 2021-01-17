using System;
using System.Collections.Generic;
using System.Text;

namespace Group10.SE347.L11_HelloWork.Application.Services.AccountClientService.Dto
{
    public class AccountClientDto
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public int AccountType { get; set; }//NTD 0 NTV 1
        public int ConfirmStatus { get; set; } //Da duyet 0, Dang cho duyet 1, yeu cau xac minh lai 2,
                                             //Chua gui chung thuc 3, khong duyet 4, chua xac minh email 5
        public int PublicStatus { get; set; }// Binh thuong 0, Bi bao cao 1
    }
}
