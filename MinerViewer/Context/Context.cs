using Microsoft.EntityFrameworkCore;

namespace MinerViewer.Context
{
  
    public class DatabaseContext : DbContext
    {
        public DbSet<Blog> Blog { get; set; }


        public DatabaseContext(DbContextOptions<DatabaseContext> options)
 : base(options)
        {
            Database.EnsureCreated();   // создаем базу данных при первом обращении
        }
    }

    public class Blog
    {
        public int BlogId { get; set; }
        public string Url { get; set; }

    }
}
