using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
// using Group0.SE347.L11_HelloWork.Application;
using Group4.SE347.L11_HelloWork.Application.Services;

using Group10.SE347.L11_HelloWork.Application;
using Group5.SE347.L11_HelloWork.Application;
using Group3.SE347.L11_HelloWork.Application;
using Group9.SE347.L11_HelloWork.Application;
using Group6.SE347.L11_HelloWork.Application;
using Group12.SE347.L11_HelloWork.Application;

using Group1.SE347.L11_HelloWork.Application;

using SE347.L11_HelloWork.Authorization;
using Group8.SE347.L11_HelloWork.Application;
using Group7.SE347.L11_HelloWork.Application;

namespace SE347.L11_HelloWork
{
    [DependsOn(
        typeof(L11_HelloWorkCoreModule),
        typeof(AbpAutoMapperModule),
        typeof(Group4ApplicationModule),
        typeof(Group10ApplicationModule),
        typeof(Group5ApplicationModule),
        typeof(Group3ApplicationModule),
        typeof(Group6ApplicationModule),
        typeof(Group8ApplicationModule),
        typeof(Group9ApplicationModule),
        typeof(Group7ApplicationModule),
        typeof(Group1ApplicationModule),
        typeof(Group12ApplicationModule)
        )]
    public class L11_HelloWorkApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<L11_HelloWorkAuthorizationProvider>();

            // add custom auto mapper
            Configuration.Modules.AbpAutoMapper().Configurators.Add(AutoMapperProfiles.Config);
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(L11_HelloWorkApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
