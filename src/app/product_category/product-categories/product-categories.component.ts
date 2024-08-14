import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Product_Category } from '../../shared/product_category';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent  implements OnInit{
  productCategories: Product_Category[] = [];
  searchText: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getProductCategories();
  }

  editProductCategory(id: number) {
    console.log('Edit button clicked'); // Adding console log statement
    this.router.navigate(['product_category/edit', id]);
  }

  deleteProductCategory(id: number) {
    console.log('delete id', id);
    this.dataService.deleteProductCategory(id).subscribe(result => {
      console.log(result);
      this.getProductCategories(); // Refresh the courses list after deletion
    });
  }

  getProductCategories() {
    this.dataService.GetProductCategories().subscribe((result: Product_Category[]) => {
      this.productCategories = result;
    });
  }

  productCategoryIdToNumber(product_CategoryId: any): number {
    return typeof product_CategoryId === 'number' ? product_CategoryId : parseInt(product_CategoryId, 10);
  }
}
