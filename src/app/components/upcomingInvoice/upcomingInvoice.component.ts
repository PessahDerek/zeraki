import {Component, Input} from "@angular/core";
import {NgForOf, NgIf} from "@angular/common";
import {addComma} from "../../lib/reusableMethods";
import {InvoiceObj} from "../../../../types";

export interface UpcomingInvoice {
  schoolName: string;
  amountDue: number;
  dueDate: Date;
  invoiceId: string;
}


@Component({
  standalone: true,
  selector: "app-upcoming-invoice",
  templateUrl: "./upcomingInvoice.component.html",
  imports: [
    NgForOf,
    NgIf
  ]
})
export class UpcomingInvoiceComponent {
  @Input() invoices: InvoiceObj[] = [];
  showPayment: boolean = false;

  protected readonly addComma = addComma;

  toggleCollect = (show?: boolean) => this.showPayment = show !== undefined ? show : !this.showPayment;
}
