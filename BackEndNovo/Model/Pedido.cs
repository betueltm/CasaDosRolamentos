using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndNovo.Model
{
    
    public class Pedido
    {
        public long pedidoid { get; set; }
        public DateTime data { get; set; }
        public double total { get; set; }
        public string cliente { get; set; }
        public string cidade { get; set; }
        public string estado { get; set; }

        [JsonIgnore]
        [ForeignKey("pedidoid")]
        public virtual ICollection<PedidoProduto> PedidoProduto { get; set; }
    }
}
