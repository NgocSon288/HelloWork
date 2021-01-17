using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group1.SE347.L11_HelloWork.Application
{
    public class Group1ApplicationModule : AbpModule
    {
        public Group1ApplicationModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group1ApplicationModule).GetAssembly());
        }
    }
}
