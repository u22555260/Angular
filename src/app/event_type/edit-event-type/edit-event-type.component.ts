import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-edit-event-type',
  templateUrl: './edit-event-type.component.html',
  styleUrl: './edit-event-type.component.scss'
})
export class EditEventTypeComponent {
  eventTypes: any[] = [];
  eventTypeForm!: FormGroup;
  eventTypeId!: number;

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    this.eventTypeForm = this.fb.group({
      event_Description: ['', Validators.required],
      event_Capacity_Status: ['', Validators.required]
    })

    this.route.params.subscribe(params => {
      this.eventTypeId = +params['eventTypeId'];
      this.dataService.getEventypeById(this.eventTypeId).subscribe(eventtype => {
        this.eventTypeForm.patchValue(eventtype);
      })
    })
  }

  onSubmit() {
    const updatedEventType = this.eventTypeForm.value;
    this.dataService.editEventType(this.eventTypeId, updatedEventType).subscribe({
      complete: () => {
             this.router.navigate(['event_type']),
             alert("Updated Successfully")
      },
      error: (error) => alert("Error!")
    })
  }
}
