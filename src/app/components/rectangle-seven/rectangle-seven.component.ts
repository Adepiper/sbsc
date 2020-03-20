import { Component, OnInit} from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions, ChartLegendOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-rectangle-seven',
  templateUrl: './rectangle-seven.component.html',
  styleUrls: ['./rectangle-seven.component.css']
})
export class RectangleSevenComponent implements OnInit {
  constructor() { }

 barChartOptions: ChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
            max: 5,
            min: 0,
            stepSize: 1
        },
        gridLines: {
          color:  'rgba(0, 0, 0, 0)'
        }
    }],
    xAxes: [{
      gridLines: {
          offsetGridLines: true,
          lineWidth: 13,
          color:  'rgba(0, 0, 0, 0)'
      }
  }]
    },
    legend: {
      position: 'bottom',
    }
 }

 barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
 barChartType: ChartType = 'bar';
 barChartLegend: ChartLegendOptions = {
    display: true,
 };
 barChartPlugins = [];

 barChartData: ChartDataSets[] = [
  { data: [1.5, 4, 2, 1, 3, 3.5, 1.2, 2.6, 5.3, 4.6, 0.5, 3], label: 'Spent', barPercentage: 1,
  barThickness: 6,
  maxBarThickness: 8,
  minBarLength: 2,
  backgroundColor: ' #17c7bf'
  },
  {data: [1.5, 3, 2, 1, 3, 3, 0.5, 2, 5, 4, 3, 3], label: 'Balance',
  barPercentage: 1,
  barThickness: 6,
  maxBarThickness: 8,
  minBarLength: 2,
  backgroundColor: '  #e95957'
  }
];


  ngOnInit(): void {
  }

}
