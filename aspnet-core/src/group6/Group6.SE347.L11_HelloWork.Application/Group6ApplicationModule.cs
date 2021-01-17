using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group6.SE347.L11_HelloWork.Application
{
    public class Group6ApplicationModule : AbpModule
    {
        public Group6ApplicationModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group6ApplicationModule).GetAssembly());
        }
    }
}
