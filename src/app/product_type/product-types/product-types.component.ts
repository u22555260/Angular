import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Product_Type } from '../../shared/product_type';

@Component({
  selector: 'app-product-types',
  templateUrl: './product-types.component.html',
  styleUrls: ['./product-types.component.scss']
})
export class ProductTypesComponent implements OnInit{
  productTypes: Product_Type[] = [];
  searchText: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getProductTypes();
  }

  editProductType(id: number) {
    console.log('Edit button clicked'); // Adding console log statement
    this.router.navigate(['product_type/edit', id]);
  }


  deleteProductType(id: number) {
    console.log('delete id', id);
    this.dataService.deleteProductType(id).subscribe(result => {
      console.log(result);
      this.getProductTypes(); // Refresh the courses list after deletion
    });
  }


  getProductTypes() {
    this.dataService.GetProductTypes().subscribe((result: Product_Type[]) => {
      this.productTypes = result;
    });
  }

  productTypeIdToNumber(product_TypeId: any): number {
    return typeof product_TypeId === 'number' ? product_TypeId : parseInt(product_TypeId, 10);
  }

}
