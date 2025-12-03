import {Component} from "@angular/core";
import {VenueCardComponent} from "../../../components/venues/card/venue-card.component";

@Component({
  selector: 'venues-component',
  standalone: true,
  templateUrl: 'venues.component.html',
  imports: [
    VenueCardComponent
  ],
  styleUrl: 'venues.component.scss'
})
export class VenuesComponent {

}
