import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product-type',
  templateUrl: './edit-product-type.component.html',
  styleUrls: ['./edit-product-type.component.scss']
})
export class EditProductTypeComponent implements OnInit{
  productTypeForm: FormGroup;
  productTypeyId!: number;

  constructor(
    private productTypeService: DataService,
    private data: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productTypeForm = this.data.group({
      product_Type_Name: [''],
      product_Type_Description: ['']
    });
  }

  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productTypeyId = +params['productTypeId'];
      this.productTypeService.getProductTypeById(this.productTypeyId).subscribe(productType => {
        this.productTypeForm.patchValue(productType);
      });
    });
  }


  onSubmit() {
    const updatedProductType = this.productTypeForm.value;
    this.productTypeService.editProductType(this.productTypeyId, updatedProductType).subscribe({
      complete: () => this.router.navigate(['product_type']),
      error: (error) => console.error(error)
    });
  }

  cancel() {
    this.router.navigate(['product_type']); // Adjust this route according to your needs
  }


}