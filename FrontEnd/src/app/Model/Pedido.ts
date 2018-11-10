export interface Pedido {
  constructor(
    id: number,
    data: string,
    total: number,
    cliente: string,
    cidade: string,
    estado: string
  ){ }
}
