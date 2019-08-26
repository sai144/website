import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  chart: any = [];
  ngOnInit() {
    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
        datasets: [
          {
            label: "My First Dataset",
            data: [1, 3, 5, 10, 56, 65, 35, 543, 543, 543],
            backgroundColor: "red",
            borderColor: "red",
            fill: true
          },
          {
            label: "My Second dataset",
            data: [1, 3, 5, 10, 56, 65, 35, 543, 543, 543].reverse(),
            backgroundColor: "blue",
            borderColor: "blue",
            fill: false
          }
        ]
      }
    });
  }
}
