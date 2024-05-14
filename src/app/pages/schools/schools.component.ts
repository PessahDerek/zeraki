import {Component} from "@angular/core";
import {CollectionObj, InvoiceObj, ProductObj, SchoolObj} from "../../../../types";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import {addComma} from "../../lib/reusableMethods";


@Component({
  standalone: true,
  selector: 'app-schools',
  imports: [HttpClientModule, NgForOf],
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent{
  schools: SchoolObj[] = [];
  collections: CollectionObj[] = [];
  invoices: InvoiceObj[] = []
  selected: SchoolObj | undefined;
  selectedProducts: string[] = [];
  selectedBalance: number = 0;
  products: ProductObj[] = [];
  constructor(private http: HttpClient) {
  }

  ngAfterViewInit() {
    this.fetchProducts()
    this.fetchSchools()
    this.fetchCollections()
    this.fetchInvoices()
  }

  selectSchool(id: number) {
    this.selected = this.schools.find(f =>f.id === id);
    this.selectedProducts = this.selected?.products.map(f => this.products.find(x => x.id === f)?.name??"") as string[]
    // unpaid invoices paid - collections
    let invoices = this.invoices.filter(f => f.school_id == id).filter(v => v.status === 'Pending')
    let collections = invoices.map(f => this.collections.find(x => x.invoice_id === f.id)).filter(v => typeof v !== 'undefined' && v.status === 'Valid') as CollectionObj[]
    this.selectedBalance = invoices.reduce((acc, curr)=>acc+curr.amount,0)
  }

  fetchSchools = () =>{
    this.http.get<SchoolObj[]>('http://localhost:3000/schools')
      .subscribe(data => this.schools = data)
  }
  fetchProducts(): void {
    this.http.get<ProductObj[]>('http://localhost:3000/products')
      .subscribe(data => this.products = data)
  }
  fetchCollections = () => {
    this.http.get<CollectionObj[]>('http://localhost:3000/collections')
      .subscribe(data => this.collections = data)
  }
  fetchInvoices = () => {
    this.http.get<InvoiceObj[]>('http://localhost:3000/invoices')
      .subscribe(data => this.invoices = data)
  }

  protected readonly addComma = addComma;
}
