using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group7.SE347.L11_HelloWork.Application
{
    public class Group7ApplicationModule : AbpModule
    {
        public Group7ApplicationModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group7ApplicationModule).GetAssembly());
        }
    }
}
