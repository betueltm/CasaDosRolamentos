import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VendasComponent } from './vendas/vendas.component';
import { ProdutoComponent } from './cadastroproduto/cadastroproduto.component';

const routes: Routes = [
  { path: '', redirectTo: '/vendas', pathMatch: 'full' },
  { path: 'vendas', component: VendasComponent },
  { path: 'produto', component: ProdutoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
