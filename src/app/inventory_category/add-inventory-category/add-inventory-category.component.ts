import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inventory-category',
  templateUrl: './add-inventory-category.component.html',
  styleUrls: ['./add-inventory-category.component.scss']
})
export class AddInventoryCategoryComponent {
  inventoryCatgoryForm!: FormGroup; // Initialized in the constructor

  constructor(private dataService: DataService, private data: FormBuilder, private router: Router) {
    this.createForm();
  }


  createForm(): void {
    this.inventoryCatgoryForm = this.data.group({
      id: [0],//-- this might be deleted if ID does not pass
      inventory_category_name: [''],
      inventory_category_description: ['']
    });
  }

  onSubmit(): void {
    const newInvenoryCategoryForm = this.inventoryCatgoryForm.value;
    this.dataService.addInventoryCategory(newInvenoryCategoryForm).subscribe({
      next: () => {},
      complete: () => this.router.navigate(['inventory_category']),
      error: (error) => console.log(error.error)
    });
  }


}
