using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group4.SE347.L11_HelloWork.Web.Core
{
    public class Group4WebCoreModule : AbpModule
    {
        public Group4WebCoreModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group4WebCoreModule).GetAssembly());
        }
    }
}
