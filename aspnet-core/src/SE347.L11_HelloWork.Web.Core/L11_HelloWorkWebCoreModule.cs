using System;
using System.Text;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Abp.AspNetCore;
using Abp.AspNetCore.Configuration;
using Abp.AspNetCore.SignalR;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Abp.Zero.Configuration;
using SE347.L11_HelloWork.Authentication.JwtBearer;
using SE347.L11_HelloWork.Configuration;
using SE347.L11_HelloWork.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
//using Group0.SE347.L11_HelloWork.Web.Core;
using Group4.SE347.L11_HelloWork.Web.Core;
using Group5.SE347.L11_HelloWork.Web.Core;

using Group10.SE347.L11_HelloWork.Web.Core;

using Group1.SE347.L11_HelloWork.Web.Core;


using Group3.SE347.L11_HelloWork.Web.Core;
using Group6.SE347.L11_HelloWork.Web.Core;
using Group9.SE347.L11_HelloWork.Web.Core;
using Group12.SE347.L11_HelloWork.Web.Core;
using Group8.SE347.L11_HelloWork.Web.Core;
using Group7.SE347.L11_HelloWork.Web.Core;

namespace SE347.L11_HelloWork
{
    [DependsOn(
        typeof(L11_HelloWorkApplicationModule),
        typeof(L11_HelloWorkEntityFrameworkModule),
        typeof(AbpAspNetCoreModule),
        typeof(AbpAspNetCoreSignalRModule),
        // typeof(Group0WebCoreModule),
        typeof(Group4WebCoreModule),
   
        typeof(Group10WebCoreModule),
        typeof(Group5WebCoreModule),
        typeof(Group3WebCoreModule),
        typeof(Group6WebCoreModule),
        typeof(Group8WebCoreModule),
        typeof(Group9WebCoreModule),
        typeof(Group1WebCoreModule),
        typeof(Group7WebCoreModule),
        typeof(Group12WebCoreModule)
     )]
    public class L11_HelloWorkWebCoreModule : AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public L11_HelloWorkWebCoreModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                L11_HelloWorkConsts.ConnectionStringName
            );

            // Use database for language management
            Configuration.Modules.Zero().LanguageManagement.EnableDbLocalization();

            Configuration.Modules.AbpAspNetCore()
                 .CreateControllersForAppServices(
                     typeof(L11_HelloWorkApplicationModule).GetAssembly()
                 );

            ConfigureTokenAuth();
        }

        private void ConfigureTokenAuth()
        {
            IocManager.Register<TokenAuthConfiguration>();
            var tokenAuthConfig = IocManager.Resolve<TokenAuthConfiguration>();

            tokenAuthConfig.SecurityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_appConfiguration["Authentication:JwtBearer:SecurityKey"]));
            tokenAuthConfig.Issuer = _appConfiguration["Authentication:JwtBearer:Issuer"];
            tokenAuthConfig.Audience = _appConfiguration["Authentication:JwtBearer:Audience"];
            tokenAuthConfig.SigningCredentials = new SigningCredentials(tokenAuthConfig.SecurityKey, SecurityAlgorithms.HmacSha256);
            tokenAuthConfig.Expiration = TimeSpan.FromDays(1);
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(L11_HelloWorkWebCoreModule).GetAssembly());
        }

        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(L11_HelloWorkWebCoreModule).Assembly);
        }
    }
}
