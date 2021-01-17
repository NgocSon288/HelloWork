using System.Collections.Generic;

namespace SE347.L11_HelloWork.Authentication.External
{
    public interface IExternalAuthConfiguration
    {
        List<ExternalLoginProviderInfo> Providers { get; }
    }
}
