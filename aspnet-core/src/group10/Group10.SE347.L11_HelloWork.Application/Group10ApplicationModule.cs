using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group10.SE347.L11_HelloWork.Application
{
    public class Group10ApplicationModule : AbpModule
    {
        public Group10ApplicationModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group10ApplicationModule).GetAssembly());
        }
    }
}
