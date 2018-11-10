using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEndNovo.Context;
using BackEndNovo.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackEndNovo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidoController : ControllerBase
    {
        private readonly Contexto _pedidoContext;
        
        public PedidoController(Contexto pedidoContext)
        {
            _pedidoContext = pedidoContext;
        }

        // GET: api/Pedido
        [HttpGet]
        [EnableCors("AllowCORS")]
        public List<Pedido> Get()
        {
            return _pedidoContext.Pedido.Include(i => i.PedidoProduto).ToList();
        }

        // GET: api/Pedido/5
        [HttpGet("{id}")]
        [EnableCors("AllowCORS")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Pedido
        [HttpPost]
        [EnableCors("AllowCORS")]
        public void Post([FromBody] Pedido pedido)
        {
            _pedidoContext.Pedido.Add(pedido);
            _pedidoContext.SaveChanges();
        }

        // PUT: api/Pedido/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [EnableCors("AllowCORS")]
        public void Delete(long id)
        {
            Pedido excluir = _pedidoContext.Pedido.Find(id);
            _pedidoContext.Remove(excluir);
            _pedidoContext.SaveChanges();
        }
    }
}
