import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-room-type',
  templateUrl: './add-room-type.component.html',
  styleUrls: ['./add-room-type.component.scss']
})
export class AddRoomTypeComponent {
  roomTypeForm!: FormGroup; // Initialized in the constructor

  constructor(private dataService: DataService, private data: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.roomTypeForm = this.data.group({
      room_Type_Capacity: [''],
      room_Type_Description: [],
      room_Size: []
    });
  }

  onSubmit(): void {
    const newRoomTypeForm = this.roomTypeForm.value;
    this.dataService.addRoomType(newRoomTypeForm).subscribe({
      next: () => {},
      complete: () => this.router.navigate(['room_booking']),
      error: (error) => console.log(error.error)
    });
  }

  

}
