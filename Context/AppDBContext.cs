using Microsoft.EntityFrameworkCore;
using react_core.Models;

namespace react_core.Context
{
    public class AppDBContext: DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options): base(options)
        {

        }

        public DbSet<Aluno> aluno {get; set;} = null;

    }
}