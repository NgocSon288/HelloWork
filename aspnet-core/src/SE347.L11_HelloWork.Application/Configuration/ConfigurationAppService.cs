using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using SE347.L11_HelloWork.Configuration.Dto;

namespace SE347.L11_HelloWork.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : L11_HelloWorkAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
