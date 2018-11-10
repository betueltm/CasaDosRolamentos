import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Pedido } from '../Model/Pedido';
import { PedidoService } from '../servicos/pedido.service';
import { PedidoData } from '../model/PedidoData';
import { toArray } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chart: any;
  pedidosSource: PedidoData = new PedidoData();

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.buscarPedidos();
  }

  buscarPedidos() {
    this.pedidoService.listar()
      .subscribe(lista => {
        this.pedidosSource.source = lista;
        this.graficoLinha(this.pedidosSource.vendasCidade(), 'lineChart');
      });
  }

  graficoLinha(valores: Map<any,any>, id_canvas: string) {
    this.chart = new Chart(id_canvas, {
      type: 'line',
      data: {
        labels: Array.from(valores.keys()), // your labels array
        datasets: [
          {
            label: '2018';
            data: Array.from(valores.values()), // your data array
            borderColor: '#00AEFF',
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
