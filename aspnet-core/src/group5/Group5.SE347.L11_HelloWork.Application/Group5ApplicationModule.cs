using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group5.SE347.L11_HelloWork.Application
{
    public class Group5ApplicationModule : AbpModule
    {
        public Group5ApplicationModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group5ApplicationModule).GetAssembly());
        }
    }
}
