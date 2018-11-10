import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from '../Model/Produto';
import { ProdutoService } from '../servicos/produto.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'valor', 'categoria','opcoes'];
  dataSource: MatTableDataSource<Produto>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  listagem: Produto[];

  produtoForm: FormGroup;
  novo_produto: Produto;
  submitted = false;
  success = false;

  constructor(private produtoService: ProdutoService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }
   
  ngOnInit() {
    this.listarProdutos();
  }

  onSubmit() {
    this.submitted = true;
    this.produtoService.salvar(this.produtoForm.value).subscribe(() => {
          this.dataSource.data.push(this.produtoForm.value);
          this.listarProdutos();
        }
    );
    
    
    this.success = true; 
  }

  deletar(produto: Produto) {
    this.produtoService.deletar(produto).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(h => h != produto);
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

  listarProdutos() {
    this.inicializarCampos();
    this.produtoService.listar()
      .subscribe(lista => {
        this.dataSource = new MatTableDataSource(lista);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }

  inicializarCampos() {
    this.produtoForm = this.formBuilder.group({
      nome: [''],
      valor: [''],
      categoria: ['']
    });
  }
}
