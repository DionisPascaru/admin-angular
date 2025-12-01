import {Component} from "@angular/core";
import {HomeHeroComponent} from "./home-hero/home-hero.component";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  standalone: true,
  imports: [
    HomeHeroComponent
  ],
  styleUrl: 'home.component.scss'
})
export class HomeComponent {}
