import {Component} from "@angular/core";
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'menu-component',
  templateUrl: 'menu.component.html',
  standalone: true,
  imports: [
    MatButton,
    MatToolbar,
    RouterLink,
  ],
  styleUrl: 'menu.component.scss'
})
export class MenuComponent {

}
