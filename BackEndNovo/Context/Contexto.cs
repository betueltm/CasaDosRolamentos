using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BackEndNovo.Model;

namespace BackEndNovo.Context
{
    public class Contexto : DbContext
    {
        public DbSet<Pedido> Pedido { get; set; }
        public DbSet<Produto> Produto { get; set; }
        public DbSet<PedidoProduto> PedidoProduto { get; set; }


        public Contexto(DbContextOptions<Contexto> options) :
            base(options)
        {
            
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.EnableSensitiveDataLogging();
      
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PedidoProduto>().HasKey(k => new { k.id });
        }
    }
}