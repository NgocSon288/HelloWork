using Abp.Domain.Repositories;
using Group10.SE347.L11_HelloWork.Application.Services.AccountClientService.Dto;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization.Users;

namespace Group10.SE347.L11_HelloWork.Application.Services.AccountClientService
{

    public class ManageAccountClientService : Group10AppServiceBase, IManageAccountClientService
    {
        private readonly IRepository<AccountClient, Guid> _repoAccountClient;
        private readonly IRepository<UserInfo, int> _repoUserInfo;
        private readonly UserManager _userManager;
        public ManageAccountClientService(IRepository<AccountClient, Guid> repository, IRepository<UserInfo, int> repoUserInfo, UserManager userManager)
        {
            _repoAccountClient = repository;
            _repoUserInfo = repoUserInfo;
            _userManager = userManager;
        }
        public async Task<IEnumerable<AccountClientDto>> GetAllAcc()
        {
            var Users = await _userManager.Users.ToListAsync();
            var ListId = _repoUserInfo.GetAll().Select(x => x.UserId);
            var rs = Users.Where(x => ListId.Contains(x.Id)).Select(u => new AccountClientDto()
            {
                Id = u.Id,
                UserName = u.UserName,
                FullName = u.FullName,
                Email=u.EmailAddress,
                AccountType = Int32.Parse(_repoUserInfo.GetAll().Where(x => x.Key == "AccountType" && u.Id == x.UserId).Select(x => x.Value).FirstOrDefault()),
                PublicStatus = Int32.Parse(_repoUserInfo.GetAll().Where(x => x.Key == "PublicStatus" && u.Id == x.UserId).Select(x => x.Value).FirstOrDefault()),
                ConfirmStatus = Int32.Parse(_repoUserInfo.GetAll().Where(x => x.Key.Contains("ConfirmStatus") && u.Id == x.UserId).Select(x => x.Value).FirstOrDefault())

            }).ToList();
            return rs;
        }

        public async Task<bool> XoaAccount(long IdAcc)
        {
            var User = _userManager.Users.Where(u => u.Id == IdAcc).FirstOrDefault();
            if (User == null)
                return false;
            var rs = await _userManager.DeleteAsync(User);
            if (rs.Succeeded)
            {

                var ListInfo=_repoUserInfo.GetAll().Where(x => x.UserId==IdAcc).ToList();
                ListInfo.ForEach(x => _repoUserInfo.Delete(x));
                return true;
            }
            else
                return false;
            //try
            //{
            //    var acc = _repoAccountClient.Get(IdAcc);
            //    if (acc == null)
            //        return false;
            //    else
            //    {
            //        await _repoAccountClient.DeleteAsync(IdAcc);
            //        return true;
            //    }
            //}
            //catch
            //{
            //    return false;
            //}
        }

        public async Task<bool> XuLiDuyet(long IdAcc, int ConfirmStatus)
        {
            // var ListId = _repoUserInfo.GetAll().Select(x => x.UserId);
            var InforUser = _repoUserInfo.GetAll().Where(x => x.Key.Contains("ConfirmStatus") && x.UserId == IdAcc).FirstOrDefault();
            if (ConfirmStatus < 0 || ConfirmStatus > 4)
                return false;
            var acc = _userManager.Users.Where(u => u.Id == IdAcc).FirstOrDefault();
            if (acc == null)
                return false;

            if (InforUser == null)
                return false;
            InforUser.Value = ConfirmStatus.ToString();
            var rs=await _repoUserInfo.UpdateAsync(InforUser);
            return true;
            //try
            //{

            //    if (acc == null)
            //        return false;
            //    else
            //    {
            //        acc. = ConfirmStatus;
            //        await _repoAccountClient.UpdateAsync(acc);
            //        return true;
            //    }
            //}
            //catch
            //{
            //    return false;
            //}

        }
    }
}
