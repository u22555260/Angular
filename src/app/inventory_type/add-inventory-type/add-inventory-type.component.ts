import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inventory-type',
  templateUrl: './add-inventory-type.component.html',
  styleUrls: ['./add-inventory-type.component.scss']
})
export class AddInventoryTypeComponent {
  inventoryTypeForm!: FormGroup; // Initialized in the constructor

  constructor(private dataService: DataService, private data: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.inventoryTypeForm = this.data.group({
      id: [0],//-- this might be deleted if ID does not pass
      inventory_Type_Name: [''],
      inventory_Type_Description: ['']
    });
  }

  onSubmit(): void {
    const newInventoryTpeForm = this.inventoryTypeForm.value;
    this.dataService.addInventoryType(newInventoryTpeForm).subscribe({
      next: () => {},
      complete: () => this.router.navigate(['inventory_type']),
      error: (error) => console.log(error.error)
    });
  }


}
