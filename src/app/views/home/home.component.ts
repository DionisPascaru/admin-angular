import {Component} from "@angular/core";
import {HomeHeroComponent} from "./home-hero/home-hero.component";
import {VenuesComponent} from "./venues/venues.component";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  standalone: true,
  imports: [
    HomeHeroComponent,
    VenuesComponent
  ],
  styleUrl: 'home.component.scss'
})
export class HomeComponent {}
