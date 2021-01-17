using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using SE347.L11_HelloWork.EntityFrameworkCore;
using SE347.L11_HelloWork.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace SE347.L11_HelloWork.Web.Tests
{
    [DependsOn(
        typeof(L11_HelloWorkWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class L11_HelloWorkWebTestModule : AbpModule
    {
        public L11_HelloWorkWebTestModule(L11_HelloWorkEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(L11_HelloWorkWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(L11_HelloWorkWebMvcModule).Assembly);
        }
    }
}