using Abp.Application.Features;
using Abp.Domain.Repositories;
using Abp.MultiTenancy;
using SE347.L11_HelloWork.Authorization.Users;
using SE347.L11_HelloWork.Editions;

namespace SE347.L11_HelloWork.MultiTenancy
{
    public class TenantManager : AbpTenantManager<Tenant, User>
    {
        public TenantManager(
            IRepository<Tenant> tenantRepository, 
            IRepository<TenantFeatureSetting, long> tenantFeatureRepository, 
            EditionManager editionManager,
            IAbpZeroFeatureValueStore featureValueStore) 
            : base(
                tenantRepository, 
                tenantFeatureRepository, 
                editionManager,
                featureValueStore)
        {
        }
    }
}
