import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-room-booking',
  templateUrl: './edit-room-booking.component.html',
  styleUrls: ['./edit-room-booking.component.scss']
})
export class EditRoomBookingComponent implements OnInit{
  roomBookingForm: FormGroup;
  roomBookingId!: number;

  constructor(
    private roomBookingService: DataService,
    private data: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.roomBookingForm = this.data.group({
      id: [0],//-- this might be deleted if ID does not pass
      booking_Status: [''],
      booking_Price: [],
      check_In_Date: [''],
      check_Out_Date: ['']
    });
  }

  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.roomBookingId = +params['id'];
      this.roomBookingService.getRoomBookingById(this.roomBookingId).subscribe(roomBooking => {
        this.roomBookingForm.patchValue(roomBooking);
      });
    });
  }


  onSubmit() {
    const updatedRoomBooking = this.roomBookingForm.value;
    this.roomBookingService.editRoomBooking(this.roomBookingId, updatedRoomBooking).subscribe({
      complete: () => this.router.navigate(['room_booking']),
      error: (error) => console.error(error)
    });
  }

  cancel() {
    this.router.navigate(['room_booking']); // Adjust this route according to your needs
  }


}
