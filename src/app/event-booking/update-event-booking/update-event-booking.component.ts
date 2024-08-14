import { AppComponent } from './../../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-update-event-booking',
  templateUrl: './update-event-booking.component.html',
  styleUrl: './update-event-booking.component.scss'
})
export class UpdateEventBookingComponent {

  events: any[] = [];
  clients: any[] = [];
  eventTypes: any[] = [];
  eventForm!: FormGroup;
  eventId!: number;

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getEventTypes();
    this.getClients();

    this.eventForm = this.fb.group({
      event_Date: ['', Validators.required],
      event_Price: ['', Validators.required],
      start_Time: ['', Validators.required],
      end_Time: ['', Validators.required],
      event_Status: ['', Validators.required],
      allergy_Description: ['', Validators.required],
      eventTypeId: ['', Validators.required],
      clientId: ['', Validators.required],
      employeeId: [1],
      shiftId: [1],
    })

    this.route.params.subscribe(params => {
      this.eventId = +params['eventId'];
      this.dataService.GetEventById(this.eventId).subscribe(events => {
        this.eventForm.patchValue(events);
      })
    })
  }

  //NOTE TO SELF, FIX TIMESPAN NONSENSE
  getEventTypes() {
    this.dataService.GetEventTypes().subscribe((result) => {
      this.eventTypes = result;
      console.log(this.eventTypes);
    }) 
  }

  getClients() {
    this.dataService.GetClients().subscribe((result) => {
      this.clients = result;
      console.log(this.clients)
    });
  }

  onSubmit() {
    const updatedEvent = this.eventForm.value;
    this.dataService.UpdateEventBooking(this.eventId, updatedEvent).subscribe({
      complete: () => 
        this.router.navigate(['event_booking']),
      error: (error) => alert("Error!")
    })
  }

}
