import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.scss']
})
export class EditInventoryComponent implements OnInit {
  inventoryForm: FormGroup;
  inventoryId!: number;

  inventoryTypes: any[] = [];
  inventoryCategories: any[] = [];
  rooms: any[] = [];

  constructor(
    private dataService: DataService,
    private data: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) 
  {
    this.inventoryForm = this.data.group({
      inventory_Name: [''],
      minimum_Stock: [''],
      maximum_Stock: [''],
      inventory_Condition: [''],
      inventory_Status: [''],
      inventoryTypeId: [''],
      inventoryCategoryId: [''],
      roomId: ['']
    });
  }

  ngOnInit() {

    this.getInventoryTypes();
    this.getInventoryCategory();
    this.getRooms();

    this.route.params.subscribe(params => {
      this.inventoryId = +params['inventoryId'];
      this.dataService.getInventoryById(this.inventoryId).subscribe(inventory => {
        this.inventoryForm.patchValue(inventory);
      });
    });
  }

  onSubmit() {
    const updatedInventory = this.inventoryForm.value;
    this.dataService.editInventory(this.inventoryId, updatedInventory).subscribe({
      complete: () => this.router.navigate(['inventory']),
      error: (error) => console.error(error)
    });
  }

  cancel() {
    this.router.navigate(['inventory']); // Adjust this route according to your needs
  }

  getInventoryTypes() {
    this.dataService.GetInventoryTypes().subscribe(result => {
      this.inventoryTypes = result;
      console.log(this.inventoryTypes);
    })
  }

  getInventoryCategory() {
    this.dataService.GetInventoryCategories().subscribe(result => {
      this.inventoryCategories = result;
      console.log(this.inventoryCategories);
    })
  }

  getRooms() {
    this.dataService.GetRooms().subscribe(result => {
      this.rooms = result;
      console.log(this.rooms);
    })
  }

}
