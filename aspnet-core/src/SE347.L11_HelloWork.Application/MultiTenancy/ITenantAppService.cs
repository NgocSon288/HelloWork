using Abp.Application.Services;
using SE347.L11_HelloWork.MultiTenancy.Dto;

namespace SE347.L11_HelloWork.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

