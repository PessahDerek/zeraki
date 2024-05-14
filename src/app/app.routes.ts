import {Routes} from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {SchoolsComponent} from "./pages/schools/schools.component";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'schools',
    component: SchoolsComponent
  }
];
