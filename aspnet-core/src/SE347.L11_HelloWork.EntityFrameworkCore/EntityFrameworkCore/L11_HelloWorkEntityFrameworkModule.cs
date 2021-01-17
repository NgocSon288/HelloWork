using Abp.EntityFrameworkCore.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Zero.EntityFrameworkCore;
using SE347.L11_HelloWork.EntityFrameworkCore.Seed;

namespace SE347.L11_HelloWork.EntityFrameworkCore
{
    [DependsOn(
        typeof(L11_HelloWorkCoreModule), 
        typeof(AbpZeroCoreEntityFrameworkCoreModule))]
    public class L11_HelloWorkEntityFrameworkModule : AbpModule
    {
        /* Used it tests to skip dbcontext registration, in order to use in-memory database of EF Core */
        public bool SkipDbContextRegistration { get; set; }

        public bool SkipDbSeed { get; set; }

        public override void PreInitialize()
        {
            if (!SkipDbContextRegistration)
            {
                Configuration.Modules.AbpEfCore().AddDbContext<L11_HelloWorkDbContext>(options =>
                {
                    if (options.ExistingConnection != null)
                    {
                        L11_HelloWorkDbContextConfigurer.Configure(options.DbContextOptions, options.ExistingConnection);
                    }
                    else
                    {
                        L11_HelloWorkDbContextConfigurer.Configure(options.DbContextOptions, options.ConnectionString);
                    }
                });
            }
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(L11_HelloWorkEntityFrameworkModule).GetAssembly());
        }

        public override void PostInitialize()
        {
            if (!SkipDbSeed)
            {
                SeedHelper.SeedHostDb(IocManager);
            }
        }
    }
}
