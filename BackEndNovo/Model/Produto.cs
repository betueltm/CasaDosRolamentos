using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndNovo.Model
{
    
    public class Produto
    {
        public long produtoid { get; set; }
        public string nome { get; set; }
        public double valor { get; set; }
        public string categoria { get; set; }

        [JsonIgnore]
        [ForeignKey("produtoid")]
        public virtual ICollection<PedidoProduto> PedidoProduto { get; set; }
    }
}
