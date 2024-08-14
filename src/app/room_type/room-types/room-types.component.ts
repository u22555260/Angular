import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Room_Type } from '../../shared/room_type';


@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.scss']
})
export class RoomTypesComponent implements OnInit{
  roomTypes: Room_Type[] = [];
  searchText: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getRoomTypes();
  }

  editRoomType(id: number) {
    console.log('Edit button clicked'); // Adding console log statement
    this.router.navigate(['room_type/edit', id]);
  }


  deleteRoomType(id: number) {
    console.log('delete id', id);
    this.dataService.deleteRoomType(id).subscribe(result => {
      console.log(result);
      this.getRoomTypes(); // Refresh the courses list after deletion
    });
  }


  getRoomTypes() {
    this.dataService.GetRoomTypes().subscribe((result: Room_Type[]) => {
      this.roomTypes = result;
    });
  }

  rooomTypeIdToNumber(room_TypeId: any): number {
    return typeof room_TypeId === 'number' ? room_TypeId : parseInt(room_TypeId, 10);
  }

}
