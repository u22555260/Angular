import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';


@Component({
  selector: 'app-add-event-type',
  templateUrl: './add-event-type.component.html',
  styleUrls: ['./add-event-type.component.scss']
})
export class AddEventTypeComponent implements OnInit {

  eventTypes: any[] = [];
  eventTypeForm!: FormGroup;

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.eventTypeForm = this.fb.group({
      event_Description: ['', Validators.required],
      event_Capacity_Status: ['', Validators.required]
    })
  }

  createEventType() {
    this.dataService.addEventType(this.eventTypeForm.value).subscribe({
      next:(res) => {
        alert("Success");
        this.router.navigate(['event_type'])
      },
      error:(err) => {
        alert("Error: Please Fill In All Required Fields")
      }
    })
  }

}
