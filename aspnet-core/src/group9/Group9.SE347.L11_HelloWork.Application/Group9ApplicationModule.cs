using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group9.SE347.L11_HelloWork.Application
{
    public class Group9ApplicationModule : AbpModule
    {
        public Group9ApplicationModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group9ApplicationModule).GetAssembly());
        }
    }
}
