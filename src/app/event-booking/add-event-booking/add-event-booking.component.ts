import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-add-event-booking',
  templateUrl: './add-event-booking.component.html',
  styleUrls: ['./add-event-booking.component.scss']
})
export class AddEventBookingComponent implements OnInit {

  events: any[] = [];
  eventTypes: any[] = [];
  clients: any[] = [];
  eventForm!: FormGroup;

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {}

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
  }

  createEvent() {
    this.dataService.CreateEvent(this.eventForm.value).subscribe({
      next:(res) => {
        alert("Success");
        this.router.navigate(['event_booking'])
      },
      error: (err) => {
        alert("Error: Please Populate All Fields");
      }
    })
  }

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

}
