import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideNavigationComponent} from "./components/sideNavigation/sideNavigation.component";
import {ProductObj} from "../../types";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavigationComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public products: ProductObj[] = []

  constructor(private http: HttpClient) {
  }
  ngAfterViewInit() {
    this.fetchProducts()
  }

  fetchProducts = () => {
    this.http.get<ProductObj[]>('http://localhost:3000/products')
      .subscribe()
  }

}
