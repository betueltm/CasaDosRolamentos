using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BackEndNovo.Model;
using BackEndNovo.Context;
using Microsoft.AspNetCore.Cors;

namespace BackEndNovo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private readonly Contexto _produtoContext;

        public ProdutoController(Contexto produtoContext)
        {
            _produtoContext = produtoContext;
        }

        // GET: api/Produto
        [HttpGet]
        [EnableCors("AllowCORS")]
        public List<Produto> Get()
        {
            return _produtoContext.Produto.ToList();
        }

        // GET: api/Produto/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Produto
        [HttpPost]
        [EnableCors("AllowCORS")]
        public void Post([FromBody] Produto produto)
        {
                _produtoContext.Produto.Add(produto);
                _produtoContext.SaveChanges();
        }

        // PUT: api/Produto/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [EnableCors("AllowCORS")]
        public void Delete(long id)
        {
            Produto excluir = _produtoContext.Produto.Find(id);
            _produtoContext.Remove(excluir);
            _produtoContext.SaveChanges();
        }
    }
}
