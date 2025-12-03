import {Component} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'home-hero-component',
  standalone: true,
  templateUrl: 'home-hero.component.html',
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  styleUrl: 'home-hero.component.scss'
})
export class HomeHeroComponent{
}
