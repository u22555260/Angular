import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Room_Booking } from '../../shared/room_booking';

@Component({
  selector: 'app-room-bookings',
  templateUrl: './room-bookings.component.html',
  styleUrl: './room-bookings.component.scss'
})
export class RoomBookingsComponent implements OnInit {
  roomBookings: Room_Booking[] = [];
  searchText: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getRoomBookings();
  }

  editRoomBooking(id: number) {
    console.log('Edit button clicked'); // Adding console log statement
    this.router.navigate(['room_booking/edit', id]);
  }

  deleteRoomBooking(id: number) {
    console.log('delete id', id);
    this.dataService.deleteRoomBooking(id).subscribe(result => {
      console.log(result);
      this.getRoomBookings(); // Refresh the courses list after deletion
    });
  }

  getRoomBookings() {
    this.dataService.GetRoomBookings().subscribe((result: Room_Booking[]) => {
      this.roomBookings = result;
    });
  }

  roomBookingIdToNumber(room_BookingId: any): number {
    return typeof room_BookingId === 'number' ? room_BookingId : parseInt(room_BookingId, 10);
  }
}
