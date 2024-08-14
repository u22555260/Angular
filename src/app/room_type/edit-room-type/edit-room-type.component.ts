import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-room-type',
  templateUrl: './edit-room-type.component.html',
  styleUrls: ['./edit-room-type.component.scss']
})
export class EditRoomTypeComponent implements OnInit{
  roomTypeForm: FormGroup;
  roomTypeyId!: number;

  constructor(
    private roomTypeService: DataService,
    private data: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.roomTypeForm = this.data.group({
      id: [0],//-- this might be deleted if ID does not pass
      room_Type_Capacity: [''],
      room_Type_Description: [''],
      room_Size:[]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.roomTypeyId = +params['id'];
      this.roomTypeService.getRoomTypeById(this.roomTypeyId).subscribe(roomType => {
        this.roomTypeForm.patchValue(roomType);
      });
    });
  }

  onSubmit() {
    const updatedRoomType = this.roomTypeForm.value;
    this.roomTypeService.editRoomType(this.roomTypeyId, updatedRoomType).subscribe({
      complete: () => this.router.navigate(['inventory']),
      error: (error) => console.error(error)
    });
  }

  cancel() {
    this.router.navigate(['inventory']); // Adjust this route according to your needs
  }


}
