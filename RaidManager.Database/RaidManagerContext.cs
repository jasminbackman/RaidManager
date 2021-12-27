using Microsoft.EntityFrameworkCore;
using RaidManager.Database.Entities;

namespace RaidManager.Database
{
    public class RaidManagerContext : DbContext
    {
        public RaidManagerContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Raid> Raids { get; set; }
        public DbSet<Log> Logs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<Raid>(r =>
            {
                r.ToTable("Raid");
                r.HasKey(r => r.Id);
                r.HasMany(r => r.Logs).WithOne(l => l.Raid);
            });

            modelBuilder.Entity<Log> (l =>
            {
                l.ToTable("Log");
                l.HasKey(l => l.Id);
                l.HasOne(l => l.Raid).WithMany(r => r.Logs);
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}