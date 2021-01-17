using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group4.SE347.L11_HelloWork.Application.Services
{
    public class Group4ApplicationModule : AbpModule
    {
        public Group4ApplicationModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group4ApplicationModule).GetAssembly());
        }
    }
}
