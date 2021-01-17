using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SE347.L11_HelloWork.MultiTenancy;

namespace SE347.L11_HelloWork.Sessions.Dto
{
    [AutoMapFrom(typeof(Tenant))]
    public class TenantLoginInfoDto : EntityDto
    {
        public string TenancyName { get; set; }

        public string Name { get; set; }
    }
}
