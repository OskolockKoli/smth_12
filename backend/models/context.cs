using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public class Ñontext : DbContext
    {
        public DbSet<Order> Orders { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=orders.db");
    }
}