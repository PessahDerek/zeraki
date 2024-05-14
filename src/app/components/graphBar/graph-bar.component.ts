import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Chart from 'chart.js/auto';
import {ProductTypes, SignupDistributionType} from "../../pages/dashboard/dashboard.component";

export interface ChartData {
  data: number;
  label: string;
}

@Component({
  standalone: true,
  selector: 'app-graph-bar',
  templateUrl: './graph-bar.component.html',
})
export class GraphBarComponent implements OnInit {
  @Input() category: string = '';
  @Input() chartData: SignupDistributionType | undefined; // Input for data
  // @Input() chartData: ChartData[] = []; // Input for data
  @Input() title: string = ""
  public chart: any;
  public canvas: HTMLCanvasElement =document.createElement('canvas');
  @ViewChild('barGraphContainer') chartContainer: ElementRef | undefined;

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.canvas.id = this.category+'-bar';
    this.canvas.width = 300;
    this.canvas.height= 400;
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
        type: 'bar',
        data: {
          datasets: (Object.keys(this.chartData??{}).map((key:string) => ({
            data: this.chartData ? this.chartData[key as ProductTypes].map(k => k.data) : [],
            label: key
          }))),
          // datasets: [{
          //   // label: this.chartData.map(t => t.label),
          //   data: this.chartData.map(x => x.data),
          //   backgroundColor: ['#43AB49', '#46D3D7', '#FFEA8A'],
          //   // hoverBackgroundColor: ['#FF5A5E', '#5AD4D9', '#FFD28A']
          // }],
          // labels: this.chartData.map(x=>`${x.label} (${x.data})`),
          labels: [...new Set(Object.values(this.chartData??{}).flatMap(t => t.map(k => k.label)))],
        },
        options: {
          responsive: true,
        }
      });
    }
  }
}
