import { Pedido } from "./Pedido";

export class Produto {
  produtoid: number;
  nome: string;
  valor: number;
  categoria: string;

  PedidoProtudo: Pedido[];
}
