import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.scss']
})
export class AddProductCategoryComponent {

  productCatgoryForm!: FormGroup; // Initialized in the constructor

  constructor(private dataService: DataService, private data: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm(): void {
    this.productCatgoryForm = this.data.group({
      id: [0],//-- this might be deleted if ID does not pass
      product_category_name: [''],
      product_category_description: ['']
    });
  }

  onSubmit(): void {
    const newProductCatgoryForm = this.productCatgoryForm.value;
    this.dataService.addInventoryCategory(newProductCatgoryForm).subscribe({
      next: () => {},
      complete: () => this.router.navigate(['product_category']),
      error: (error) => console.log(error.error)
    });
  }

}
