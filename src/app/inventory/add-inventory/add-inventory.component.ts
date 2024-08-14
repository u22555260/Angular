import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent implements OnInit {
  inventoryForm!: FormGroup;
  inventoryTypes: any[] = [];
  inventoryCategories: any[] = [];
  rooms: any[] = []


  constructor(private dataService: DataService, private data: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.getInventoryTypes();
    this.getInventoryCategory();
    this.getRooms();
  }

  createForm(): void {
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

  onSubmit(): void {
    const newInventory = this.inventoryForm.value;
    this.dataService.addInventory(newInventory).subscribe({
      next: () => {},
      complete: () => this.router.navigate(['inventory']),
      error: (error) => console.log(error.error)
    });
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
