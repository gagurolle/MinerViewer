using Microsoft.EntityFrameworkCore;
using MinerViewer.Data.Entities;

namespace MinerViewer.Context
{
  
    public class DatabaseContext : DbContext
    {
       // public DbSet<Miner> Miners { get; set; }

        public DbSet<GraphicCard> GraphicCards { get; set; }

        public DbSet<MinerAdress> MinerAdresses { get; set; }


        public DatabaseContext(DbContextOptions<DatabaseContext> options)
 : base(options)
        {
            Database.EnsureCreated();   // создаем базу данных при первом обращении
        }
    }

}
