namespace SE347.L11_HelloWork.EntityFrameworkCore.Seed.Host
{
    public class InitialHostDbBuilder
    {
        private readonly L11_HelloWorkDbContext _context;

        public InitialHostDbBuilder(L11_HelloWorkDbContext context)
        {
            _context = context;
        }

        public void Create()
        {
            new DefaultEditionCreator(_context).Create();
            new DefaultLanguagesCreator(_context).Create();
            new HostRoleAndUserCreator(_context).Create();
            new DefaultSettingsCreator(_context).Create();
            new DefaultDataGroup10Creator(_context).Create();

            _context.SaveChanges();
        }
    }
}
