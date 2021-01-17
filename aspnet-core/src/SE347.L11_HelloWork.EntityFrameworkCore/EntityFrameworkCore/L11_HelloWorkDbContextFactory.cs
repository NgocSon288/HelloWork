using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using SE347.L11_HelloWork.Configuration;
using SE347.L11_HelloWork.Web;

namespace SE347.L11_HelloWork.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class L11_HelloWorkDbContextFactory : IDesignTimeDbContextFactory<L11_HelloWorkDbContext>
    {
        public L11_HelloWorkDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<L11_HelloWorkDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            L11_HelloWorkDbContextConfigurer.Configure(builder, configuration.GetConnectionString(L11_HelloWorkConsts.ConnectionStringName));

            return new L11_HelloWorkDbContext(builder.Options);
        }
    }
}
