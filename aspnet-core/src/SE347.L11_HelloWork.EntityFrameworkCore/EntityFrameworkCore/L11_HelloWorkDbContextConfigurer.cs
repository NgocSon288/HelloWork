using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace SE347.L11_HelloWork.EntityFrameworkCore
{
    public static class L11_HelloWorkDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<L11_HelloWorkDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<L11_HelloWorkDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
