import {Component} from "@angular/core";
import {MatFormField, MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'home-hero-component',
  standalone: true,
  templateUrl: 'home-hero.component.html',
  imports: [
    MatInput,
    FormsModule,
    MatFormField,
    MatButton,
    ReactiveFormsModule,
  ],
  styleUrl: 'home-hero.component.scss'
})
export class HomeHeroComponent{
}
