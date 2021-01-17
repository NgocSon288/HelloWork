using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group3.SE347.L11_HelloWork.Application
{
    public class Group3ApplicationModule : AbpModule
    {
        public Group3ApplicationModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group3ApplicationModule).GetAssembly());
        }
    }
}
