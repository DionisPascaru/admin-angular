import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'footer-component',
  standalone: true,
  templateUrl: 'footer.component.html',
  styleUrl: 'footer.component.scss',
  imports: [
    RouterLink,
  ]
})
export class FooterComponent {

}
