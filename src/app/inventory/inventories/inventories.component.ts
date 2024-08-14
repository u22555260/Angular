import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";
import { Inventory } from "../../shared/inventory";


@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.scss']
})
export class InventoriesComponent implements OnInit{
  inventories: Inventory[] = [];
  searchText: any;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getInventories();
  }


  deleteInventory(id: number) {
    console.log('delete id', id);
    this.dataService.deleteInventory(id).subscribe(result => {
      console.log(result);
      this.getInventories();
    });
  }

  getInventories() {
    this.dataService.GetInventories().subscribe((result: Inventory[]) => {
      this.inventories = result;    
    });
  }

}
