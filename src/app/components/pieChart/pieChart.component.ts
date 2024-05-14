import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Chart from 'chart.js/auto';

export interface ChartData {
  data: number;
  label: string;
}

@Component({
  standalone: true,
  selector: 'app-pie-chart',
  templateUrl: './pieChart.component.html',
})
export class PieChartComponent implements OnInit {
  @Input() category: string = '';
  @Input() chartData: ChartData[] = []; // Input for data
  public chart: any;
  public canvas: HTMLCanvasElement =document.createElement('canvas');
  @ViewChild('chartContainer') chartContainer: ElementRef | undefined;

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.canvas.id = this.category;
    this.canvas.width = 300;
    this.canvas.height= 300;
    this.chartContainer?.nativeElement.appendChild(this.canvas)
    console.log(this.chartContainer)
    if (this.chartData) {
      this.createPieChart();
    }
  }

  createPieChart() {
    // const ctx = (document.getElementById(this.uniqueId) as HTMLCanvasElement)?.getContext('2d');
    const ctx = this.canvas.getContext('2d')
    if(ctx){
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [{
            data: this.chartData.map(x => x.data),
            backgroundColor: ['#43AB49', '#46D3D7', '#FFEA8A'],
            // hoverBackgroundColor: ['#FF5A5E', '#5AD4D9', '#FFD28A']
          }],
          labels: this.chartData.map(x=>`${x.label} (${x.data})`),
        },
        options: {
          responsive: true,
        }
      });
    }
  }
}
