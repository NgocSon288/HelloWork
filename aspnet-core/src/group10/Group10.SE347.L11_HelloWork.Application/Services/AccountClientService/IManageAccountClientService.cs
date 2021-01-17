using Group10.SE347.L11_HelloWork.Application.Services.AccountClientService.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group10.SE347.L11_HelloWork.Application.Services.AccountClientService
{
    public interface IManageAccountClientService
    {
        public Task<IEnumerable<AccountClientDto>> GetAllAcc();
        public Task<bool> XuLiDuyet(long IdAcc,int ConfirmStatus);
        public Task<bool> XoaAccount(long IdAcc);

    }
}
