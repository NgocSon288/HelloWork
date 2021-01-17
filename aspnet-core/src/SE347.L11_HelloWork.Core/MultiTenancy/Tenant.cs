using Abp.MultiTenancy;
using SE347.L11_HelloWork.Authorization.Users;

namespace SE347.L11_HelloWork.MultiTenancy
{
    public class Tenant : AbpTenant<User>
    {
        public Tenant()
        {            
        }

        public Tenant(string tenancyName, string name)
            : base(tenancyName, name)
        {
        }
    }
}
