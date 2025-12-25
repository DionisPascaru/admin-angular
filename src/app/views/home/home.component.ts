import {Component} from "@angular/core";
import {HomeHeroComponent} from "./home-hero/home-hero.component";
import {VenuesComponent} from "./venues/venues.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  standalone: true,
  imports: [
    HomeHeroComponent,
    VenuesComponent,
    FooterComponent
  ],
  styleUrl: 'home.component.scss'
})
export class HomeComponent {}
