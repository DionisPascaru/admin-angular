import {Component, Input, OnInit} from "@angular/core";
import {VenueCardInterface} from "./venue-card.interface";

@Component({
  selector: 'venue-card-component',
  standalone: true,
  templateUrl: 'venue-card.component.html',
  styleUrl: 'venue-card.component.scss',
})
export class VenueCardComponent implements OnInit{
  @Input({required: true}) venue!: VenueCardInterface;

  public ngOnInit(): void
  {
    console.log(this.venue);
  }
}
