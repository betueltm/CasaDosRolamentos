import { Pedido } from "./Pedido";
import { map } from 'rxjs/operators';

export class PedidoData {
  source: Pedido[];
  iterator: number;
  cidades: Map<string,number> = new Map();
  

  public vendasCidade(): Map<string,number> {
    this.iterator = 0;
    while (this.iterator < this.source.length) {
      if (this.cidades.has(this.source[this.iterator].cidade)) {
        this.cidades.set(this.source[this.iterator].cidade, this.source[this.iterator].total + this.cidades.get(this.source[this.iterator].cidade));
      } else {
        this.cidades.set(this.source[this.iterator].cidade, this.source[this.iterator].total);
      }
      this.iterator++;
    }


    return this.cidades;
  }
}
