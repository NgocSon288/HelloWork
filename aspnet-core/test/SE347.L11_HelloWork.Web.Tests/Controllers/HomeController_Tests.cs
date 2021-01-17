using System.Threading.Tasks;
using SE347.L11_HelloWork.Models.TokenAuth;
using SE347.L11_HelloWork.Web.Controllers;
using Shouldly;
using Xunit;

namespace SE347.L11_HelloWork.Web.Tests.Controllers
{
    public class HomeController_Tests: L11_HelloWorkWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}