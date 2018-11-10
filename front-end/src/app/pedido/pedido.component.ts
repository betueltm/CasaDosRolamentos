import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from '../Model/Produto';
import { Pedido } from '../Model/Pedido';
import { ProdutoService } from '../servicos/produto.service';
import { PedidoService } from '../servicos/pedido.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Location } from '@angular/common';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  panelOpenState = false;
  displayedColumns: string[] = ['id', 'nome', 'valor', 'categoria', 'opcoes'];
  dataSource: MatTableDataSource<Produto> = new MatTableDataSource<Produto>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  produtosPedido: Produto[];
  produtosCadastrados: Produto[];
  pedido: Pedido = new Pedido;
  total: number = 0;
  novo_produto: Produto = new Produto;

  pedidoForm: FormGroup;
  produtoForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private pedidoService: PedidoService,
    private produtoService: ProdutoService,
    private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder,
    private location: Location
  ) { }

  ngOnInit() {
    this.inicializar();
  }

  onSubmit() {
    this.pedido = this.pedidoForm.value;
    this.pedido.total = this.total;
    this.pedido.PedidoProduto = this.produtosPedido;
    this.submitted = true;
    this.pedidoService.salvar(this.pedido).subscribe(() => {
      this.inicializar();
      this.atualisarLista();
      }
    );
    this.success = true;
  }

  adicionarProduto() {
    this.novo_produto = new Produto;
    this.novo_produto.produtoid = this.produtosCadastrados.find(h => h.produtoid == this.produtoForm.value.id).produtoid;
    this.novo_produto.nome = this.produtosCadastrados.find(h => h.produtoid == this.produtoForm.value.id).nome;
    this.novo_produto.valor = this.produtosCadastrados.find(h => h.produtoid == this.produtoForm.value.id).valor;
    this.produtosPedido.push(this.novo_produto);
    this.total += this.novo_produto.valor;
    
    this.atualisarLista();
    this.inicializarProdutoPedido();
  }

  removerProduto(produto: Produto) {
    this.produtosPedido = this.produtosPedido.filter(h => h != produto);
    this.total -= produto.valor;
    this.atualisarLista();
  }

  deletar(pedido: Pedido) {
    this.pedidoService.deletar(pedido).subscribe(() => {
   
    });
  }

  goBack() {
    this.location.back();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  inicializar() {
    this.produtosPedido = [];
    this.inicializarProdutoPedido();
    this.inicializarCamposPedido();
    this.produtoService.listar()
      .subscribe(lista => {
        this.produtosCadastrados = lista;
      });
  }

  atualisarLista() {
    this.dataSource.data = this.produtosPedido;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  inicializarProdutoPedido() {
    this.produtoForm = this.formBuilder2.group({
      id: [''],
      nome: [''],
      valor: ['']
    });
  }

  inicializarCamposPedido() {
    this.pedidoForm = this.formBuilder.group({
      data: [''],
      cliente: [''],
      cidade: [''],
      estado: ['']
    });
  }
}
