import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {
  LineChart = [];
  LineChart2 = [];
  constructor(private _http: HttpClient) { }
  //dailyForecast() {
  //  return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
  //    .pipe(map(result => result));
  //}
  initChart() {
    this.LineChart = new Chart('lineChart', {
      type: 'bar',
      data: {
        labels: [ "primeiro", "segundo", "terceiro"],
        datasets: [{
          label: "vendas",
          data: [10,20,5],
          fill: false,
          lineTension: 0.2,
          borderColor: "white",
          backgroundColor: ["#6b5b95", "#d64161","#feb236"],
          borderWidth: 0
        }]
      },
      options: {
        title: {
          text: "",
          display: true
        }
      },
      scales: {
        yAxes: [{ ticks: { beginAtZero:true }}]
      }
    }

    );
    this.LineChart2 = new Chart('lineChart2', {
      type: 'doughnut',
      data: {
        labels: ["primeiro", "segundo", "terceiro"],
        datasets: [{
          label: "vendas",
          data: [10, 20, 5],
          fill: false,
          lineTension: 0.2,
          borderColor: "withe",
          backgroundColor: ["#6b5b95", "#d64161", "#feb236"],
          borderWidth: 0
        }]
      },
      options: {
        title: {
          text: "",
          display: true
        }
      },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true } }]
      }
    }

    );
  }
  ngOnInit() {
    this.initChart();
    console.log(this.LineChart);
  }

}
