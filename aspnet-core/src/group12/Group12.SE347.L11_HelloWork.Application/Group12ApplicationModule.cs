using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Group12.SE347.L11_HelloWork.Application.Services.SearchJobs.Dto;
using SE347.L11_HelloWork.Entities;
using System.Linq;

namespace Group12.SE347.L11_HelloWork.Application
{
    public class Group12ApplicationModule : AbpModule
    {
        public Group12ApplicationModule() { }

        public override void Initialize()
        {

        }

        public override void PreInitialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Group12ApplicationModule).GetAssembly());
            Configuration.Modules.AbpAutoMapper().Configurators.Add(config =>
            {
                config.CreateMap<Recruitment, JobResultDto>()
                      .ForMember(u => u.Expertises, options => options.MapFrom(x => x.ExpertiseRecruitments.Select(ept => ept.Expertise.Name).ToList()));
            });
        }
    }
}
