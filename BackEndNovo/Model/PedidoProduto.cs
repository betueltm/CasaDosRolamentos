using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndNovo.Model
{
   
    public class PedidoProduto
    {
        public long id { get; set; }
        public long produtoid { get; set; }
        public Produto produto { get; set; }

        public long pedidoid { get; set; }
        public Pedido pedido { get; set; }
    }
}
