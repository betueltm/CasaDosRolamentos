import { Produto } from "./Produto";

export class Pedido {
  pedidoid: number;
  data: string;
  total: number;
  cliente: string;
  cidade: string;
  estado: string;

  PedidoProduto: Produto[];
}
