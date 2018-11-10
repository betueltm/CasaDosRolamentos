using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd
{
    public class Contexto_ : DbContext
    {
        public Contexto_() : base(: "database") { }
    }
}
