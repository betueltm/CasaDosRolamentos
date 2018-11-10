import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../Model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private readonly url: string = "http://localhost:5000/api/produto";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Produto[]>(this.url);
  }
  salvar(produto: Produto){
    return this.http.post<Produto>(this.url,produto);
  }
  deletar(produto: Produto) {
    const id = typeof produto === 'number' ? produto : produto.produtoid;
    return this.http.delete(this.url + '/' + id);
  }
}
