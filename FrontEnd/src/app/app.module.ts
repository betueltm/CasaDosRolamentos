import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppComponent } from './app.component';
import { MaterialModule } from '../material-module';
import { VendasComponent } from './vendas/vendas.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoComponent } from './cadastroproduto/cadastroproduto.component';
import { ProdutoService } from './services/servicoprotudo.service';

@NgModule({
  declarations: [
    AppComponent,
    VendasComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
