import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Pedido } from '../Model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private readonly url: string = "http://localhost:5000/api/pedido";
  private readonly cabecalho: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json, charset=utf-8' });
  private readonly parametros: HttpParams = new HttpParams({ });
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pedido[]>(this.url);
  }
  salvar(pedido: Pedido) {
    return this.http.post<Pedido>(this.url, pedido, { headers: this.cabecalho, params: this.parametros });
  }
  deletar(pedido: Pedido) {
    const id = typeof pedido === 'number' ? pedido : pedido.pedidoid;
    return this.http.delete(this.url + '/' + id);
  }
}
