import { Component, OnInit } from '@angular/core';
import { Produto } from '../Model/Produto';
import { ProdutoService } from '../Services/servicoprotudo.service';

@Component({
  selector: 'app-produto',
  templateUrl: './cadastroproduto.component.html',
  styleUrls: ['./cadastroproduto.component.css'],
  providers: [ProdutoService]
})
export class ProdutoComponent implements OnInit {
  listagem: Produto[];

  constructor(private _produtoService: ProdutoService) { }

  getProdutos() {
    
    this._produtoService.getProdutos()
      .subscribe(listagem => this.listagem = listagem);
  }

  ngOnInit() {
    this.getProdutos();
    console.log(this.listagem);
  }

  OnSubmit() {

  }
}
