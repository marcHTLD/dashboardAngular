import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../../canvasjs.min.js';
//var CanvasJS = require('./canvasjs.min');

@Component({
  selector: 'app-example-chart',
  templateUrl: './example-chart.component.html',
  styleUrls: ['./example-chart.component.css']
})
export class ExampleChartComponent implements OnInit {

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 450, name: "Food" },
          { y: 120, name: "Insurance" },
          { y: 300, name: "Traveling" },
          { y: 800, name: "Housing" },
          { y: 150, name: "Education" },
          { y: 150, name: "Shopping"},
          { y: 250, name: "Others" }
        ]
      }]
    });
      
    chart.render();
  }

}


