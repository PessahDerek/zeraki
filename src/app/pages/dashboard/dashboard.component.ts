import {Component} from "@angular/core";
import {CardComponent} from "./subComponents/card.component";
import {NgForOf} from "@angular/common";
import {ChartData, PieChartComponent} from "../../components/pieChart/pieChart.component";
import {GraphBarComponent} from "../../components/graphBar/graph-bar.component";
import {UpcomingInvoice, UpcomingInvoiceComponent} from "../../components/upcomingInvoice/upcomingInvoice.component";
import {Service} from "json-server/lib/service";
import {HttpClient} from "@angular/common/http";
import {InvoiceObj} from "../../../../types";

type schools = 'Primary' | 'Secondary' | 'IGCSE';
export type ProductTypes = 'Analytics' | 'Finance' | 'Timetable';
export type SignupDistributionType = {
  [key in ProductTypes]: ChartData[]; // Keyof lookup with Product type
}

@Component({
  standalone: true,
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  imports: [
    CardComponent,
    NgForOf,
    PieChartComponent,
    GraphBarComponent,
    UpcomingInvoiceComponent
  ],
  styleUrls: ["./dashboard.component.css"]
})

export class DashboardComponent {
  metrics: { [key: string]: any } = {
    collections: {
      value: [{sub: "Total", val: 5000}]
    },
    signups: {
      value: [{sub: "Analytics", val: 5000}, {sub: "Finance", val: 5000}, {sub: "Timetable", val: 5000}],
    },
    revenue: {
      value: [{sub: "Analytics", val: 5000}, {sub: "Finance", val: 5000}, {sub: "Timetable", val: 5000}],
    },
    bounced: {
      value: [{sub: "Analytics", val: 5000}, {sub: "Finance", val: 5000}, {sub: "Timetable", val: 5000}],
    }
  }
  targets: { [key: string]: { [key: string]: ChartData[] } } = {
    signups: {
      Analytics: [{label: 'Target', data: 60000}, {label: "Achieved", data: this.metrics['signups'].value[0].val}],
      Finance: [{label: 'Target', data: 83000}, {label: "Achieved", data: this.metrics['signups'].value[1].val}],
      Timetable: [{label: 'Target', data: 15000}, {label: "Achieved", data: this.metrics['signups'].value[2].val}],
    }
  }
  signupDistribution: SignupDistributionType = {
    Analytics: [{label: "Primary", data: 500}, {label: "Secondary", data: 2000}, {label: "IGCSE", data: 2500}],
    Finance: [{label: "Primary", data: 500}, {label: "Secondary", data: 2000}, {label: "IGCSE", data: 2500}],
    Timetable: [{label: "Primary", data: 500}, {label: "Secondary", data: 2000}, {label: "IGCSE", data: 2500}],
  }
  upcomingInvoices: InvoiceObj[] = []

  protected readonly Object = Object;

  constructor(private http: HttpClient) {

  }
  ngAfterViewInit() {
    this.fetchInvoices()
  }
  fetchInvoices(): void {
    this.http.get<InvoiceObj[]>('http://localhost:3000/invoices')
      .subscribe(data => this.upcomingInvoices = data.filter(f => f.status === 'Pending'))
  }
}

