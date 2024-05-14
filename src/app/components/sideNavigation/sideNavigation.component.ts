import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";


@Component({
  standalone: true,
  selector: 'side-navigation',
  templateUrl: './sideNavigation.component.html',
  styleUrls: ['./sideNavigation.component.css'],
  imports: [
    RouterLink
  ]
})
export class SideNavigationComponent {

}
