import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-types',
  templateUrl: './event-types.component.html',
  styleUrls: ['./event-types.component.scss']
})
export class EventTypesComponent implements OnInit {

  eventTypes: any[] = [];
  searchText: any;
  
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.getEventTypes();
  }
  
  getEventTypes() {
    this.dataService.GetEventTypes().subscribe((result) => {
      this.eventTypes = result;
    }) 
  }

  deleteEventType(id: number) {
    this.dataService.deleteEventType(id).subscribe(result => {
      this.getEventTypes();
    })
  }
}
