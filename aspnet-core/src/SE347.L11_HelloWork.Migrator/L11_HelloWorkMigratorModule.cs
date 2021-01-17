using Microsoft.Extensions.Configuration;
using Castle.MicroKernel.Registration;
using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using SE347.L11_HelloWork.Configuration;
using SE347.L11_HelloWork.EntityFrameworkCore;
using SE347.L11_HelloWork.Migrator.DependencyInjection;

namespace SE347.L11_HelloWork.Migrator
{
    [DependsOn(typeof(L11_HelloWorkEntityFrameworkModule))]
    public class L11_HelloWorkMigratorModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public L11_HelloWorkMigratorModule(L11_HelloWorkEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

            _appConfiguration = AppConfigurations.Get(
                typeof(L11_HelloWorkMigratorModule).GetAssembly().GetDirectoryPathOrNull()
            );
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                L11_HelloWorkConsts.ConnectionStringName
            );

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
            Configuration.ReplaceService(
                typeof(IEventBus), 
                () => IocManager.IocContainer.Register(
                    Component.For<IEventBus>().Instance(NullEventBus.Instance)
                )
            );
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(L11_HelloWorkMigratorModule).GetAssembly());
            ServiceCollectionRegistrar.Register(IocManager);
        }
    }
}
