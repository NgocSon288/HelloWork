﻿using Abp.Modules;
using Abp.Reflection.Extensions;

namespace Group5.SE347.L11_HelloWork.Web.Core
{
    public class Group5WebCoreModule : AbpModule
    {
        public Group5WebCoreModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group5WebCoreModule).GetAssembly());
        }
    }
}
