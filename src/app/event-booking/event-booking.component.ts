import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.scss']
})
export class EventBookingComponent implements OnInit{
  events: any[] = []
  searchText: any;
  
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.dataService.GetEvents().subscribe((result) => {
      this.events = result;
    })
  }

  deleteEventBooking(eventId: number) {
    this.dataService.DeleteEventBooking(eventId).subscribe(result => {
      this.getEvents();
    })
  }
}
