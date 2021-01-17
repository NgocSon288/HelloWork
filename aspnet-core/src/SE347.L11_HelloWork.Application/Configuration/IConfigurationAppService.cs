using System.Threading.Tasks;
using SE347.L11_HelloWork.Configuration.Dto;

namespace SE347.L11_HelloWork.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
