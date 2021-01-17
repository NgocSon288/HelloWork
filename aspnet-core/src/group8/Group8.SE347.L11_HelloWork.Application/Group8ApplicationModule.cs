using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group8.SE347.L11_HelloWork.Application
{
    public class Group8ApplicationModule : AbpModule
    {
        public Group8ApplicationModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group8ApplicationModule).GetAssembly());
        }
    }
}
