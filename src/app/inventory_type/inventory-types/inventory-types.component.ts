import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Inventory_Type } from '../../shared/inventory_type';

@Component({
  selector: 'app-inventory-types',
  templateUrl: './inventory-types.component.html',
  styleUrls: ['./inventory-types.component.scss']
})
export class InventoryTypesComponent implements OnInit{
  inventoryTypes: Inventory_Type[] = [];
  searchText: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getInventoryTypes();
  }

  editInventoryType(id: number) {
    console.log('Edit button clicked'); // Adding console log statement
    this.router.navigate(['inventory_type/edit', id]);
  }


  deleteInventoryType(id: number) {
    console.log('delete id', id);
    this.dataService.deleteInventoryType(id).subscribe(result => {
      console.log(result);
      this.getInventoryTypes(); // Refresh the courses list after deletion
    });
  }


  getInventoryTypes() {
    this.dataService.GetInventoryTypes().subscribe((result: Inventory_Type[]) => {
      this.inventoryTypes = result;
    });
  }

  inventoryTypeIdToNumber(inventory_TypeId: any): number {
    return typeof inventory_TypeId === 'number' ? inventory_TypeId : parseInt(inventory_TypeId, 10);
  }

}
