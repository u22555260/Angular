import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Client } from '../../shared/client';

@Component({
  selector: 'app-add-room-booking',
  templateUrl: './add-room-booking.component.html',
  styleUrls: ['./add-room-booking.component.scss']
})
export class AddRoomBookingComponent implements OnInit{
  roomBookingForm!: FormGroup; 
  clients: any[] = [];
  rooms: any[] = [];

  hidden: any = "hidden='hidden'";

  yestarday!: string;

  ngOnInit(): void {
    const now = new Date();
    this.yestarday = now.toISOString().split('T')[0]; 
  }

  constructor(private dataService: DataService, private data: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.getClients();
    this.getRooms();
    this.getBookingPackage();

    this.roomBookingForm = this.data.group({
      booking_Status: [''],
      booking_Price: [''],
      check_In_Date: [''],
      check_Out_Date: [''],
      clientId: [''],
      roomId: [''],
      bookingPackageId: [1],
      discountId: [1]
    });
  }

  onSubmit(): void {
    this.dataService.addRoomBooking(this.roomBookingForm.value).subscribe({
      next: () => {},
      complete: () => this.router.navigate(['room_booking']),
      error: (error) => console.log(error.error)
    });
  }

  
  getClients() {
    this.dataService.GetClients().subscribe((result) => {
      this.clients = result;
      console.log(this.clients)
    });
  }

  getRooms() {
    this.dataService.GetRooms().subscribe(result => {
      this.rooms = result;
      console.log(this.rooms);
    })
  }

  getBookingPackage() {

  }

}

