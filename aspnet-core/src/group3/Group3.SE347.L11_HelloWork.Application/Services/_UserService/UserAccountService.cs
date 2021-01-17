using Abp.Domain.Repositories;
using Group3.SE347.L11_HelloWork.Application.Services._UserService.Dto;
using SE347.L11_HelloWork.Authorization.Users;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Group3.SE347.L11_HelloWork.Application.Services._UserService
{
    public class UserAccountService: IUserAccountService
    {
        private IRepository<UserInfo, int> _userInfoRepo;

        public UserAccountService(IRepository<UserInfo, int> userInfoRepo)
        {
            _userInfoRepo = userInfoRepo;
        }

        public async Task<UserInfo> AddInfo(int userId, string key, string value)
        {
            return await _userInfoRepo.InsertOrUpdateAsync(new UserInfo
            {
                UserId = userId,
                Key = key,
                Value = value,
            });
        }

        public UserInfo GetInfo(int userId, string key)
        {
            return _userInfoRepo.GetAll().Where((x) => x.UserId == userId && x.Key.Equals(key)).First();
        }

        public List<UserInfo> GetInfo(int userId)
        {
            var result = _userInfoRepo.GetAll().Where(x => x.UserId == userId).ToList();
            return result;
        }


    }
}
