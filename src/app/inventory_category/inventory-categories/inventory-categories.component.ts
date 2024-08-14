import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Inventory_Category } from '../../shared/inventory_category';

@Component({
  selector: 'app-inventory-categories',
  templateUrl: './inventory-categories.component.html',
  styleUrls: ['./inventory-categories.component.scss']
})
export class InventoryCategoriesComponent implements OnInit {
  inventoryCategories: Inventory_Category[] = [];
  searchText: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getInventoryCategories();
  }

  editInventoryCategory(id: number) {
    console.log('Edit button clicked'); // Adding console log statement
    this.router.navigate(['inventory_category/edit', id]);
  }

  deleteInventoryCategory(id: number) {
    console.log('delete id', id);
    this.dataService.deleteInventoryCategory(id).subscribe(result => {
      console.log(result);
      this.getInventoryCategories(); // Refresh the courses list after deletion
    });
  }

  getInventoryCategories() {
    this.dataService.GetInventoryCategories().subscribe((result: Inventory_Category[]) => {
      this.inventoryCategories = result;
    });
  }

  inventoryCategoryIdToNumber(inventory_CategoryId: any): number {
    return typeof inventory_CategoryId === 'number' ? inventory_CategoryId : parseInt(inventory_CategoryId, 10);
  }
}
