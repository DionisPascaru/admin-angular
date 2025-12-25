import {Component} from "@angular/core";
import {VenueCardComponent} from "../../../components/venues/card/venue-card.component";

@Component({
  selector: 'venues-component',
  standalone: true,
  templateUrl: 'venues.component.html',
  imports: [
    VenueCardComponent,
  ],
  styleUrl: 'venues.component.scss'
})
export class VenuesComponent {
  public venues = [
    {
      id: 1,
      title: 'Beach Volleyball Paradise',
      address: 'Rockaway Beach, NY',
      tags: ['Floodlights', 'Changing Rooms', 'Parking'],
      category: 'Football',
      status: 'Available',
    },
    {
      id: 2,
      title: 'Beach Volleyball Paradise',
      address: 'Rockaway Beach, NY',
      tags: ['Floodlights', 'Changing Rooms', 'Parking'],
      category: 'Football',
      status: 'Available',
    },
    {
      id: 3,
      title: 'Beach Volleyball Paradise',
      address: 'Rockaway Beach, NY',
      tags: ['Floodlights', 'Changing Rooms', 'Parking'],
      category: 'Football',
      status: 'Available',
    },
  ];
}
