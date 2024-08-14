import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product-category',
  templateUrl: './edit-product-category.component.html',
  styleUrls: ['./edit-product-category.component.scss']
})
export class EditProductCategoryComponent implements OnInit{
  productCategoryForm: FormGroup;
  productCategoryId!: number;

  constructor(
    private productCategoryService: DataService,
    private data: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productCategoryForm = this.data.group({
      id: [0],//-- this might be deleted if ID does not pass
      product_Category_Name: [''],
      product_Category_Description: ['']
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productCategoryId = +params['inventoryCategoryId'];
      this.productCategoryService.getInventoryCategoryById(this.productCategoryId).subscribe(productCategory => {
        this.productCategoryForm.patchValue(productCategory);
      });
    });
  }


  onSubmit() {
    const updatedProductCategory = this.productCategoryForm.value;
    this.productCategoryService.editInventoryCategory(this.productCategoryId, updatedProductCategory).subscribe({
      complete: () => this.router.navigate(['product_category']),
      error: (error) => console.error(error)
    });
  }

  cancel() {
    this.router.navigate(['inventory']); // Adjust this route according to your needs
  }


}
