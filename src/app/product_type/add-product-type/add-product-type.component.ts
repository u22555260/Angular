import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product-type',
  templateUrl: './add-product-type.component.html',
  styleUrls: ['./add-product-type.component.scss']
})
export class AddProductTypeComponent {

  productTypeForm!: FormGroup; // Initialized in the constructor

  constructor(private dataService: DataService, private data: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.productTypeForm = this.data.group({
      id: [0],//-- this might be deleted if ID does not pass
      product_Type_Name: [''],
      product_Type_Description: ['']
    });
  }

  onSubmit(): void {
    const newProductTypeForm = this.productTypeForm.value;
    this.dataService.addInventoryType(newProductTypeForm).subscribe({
      next: () => {},
      complete: () => this.router.navigate(['product_type']),
      error: (error) => console.log(error.error)
    });
  }
}
