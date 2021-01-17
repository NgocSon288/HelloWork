using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using SE347.L11_HelloWork.Configuration;

namespace SE347.L11_HelloWork.Web.Host.Startup
{
    [DependsOn(
       typeof(L11_HelloWorkWebCoreModule))]
    public class L11_HelloWorkWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public L11_HelloWorkWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(L11_HelloWorkWebHostModule).GetAssembly());
        }
    }
}
