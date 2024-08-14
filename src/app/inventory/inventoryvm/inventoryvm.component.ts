import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { InventoryVM } from '../../shared/inventoryvm';

@Component({
  selector: 'app-inventoryvm',
  templateUrl: './inventoryvm.component.html',
  styleUrls: ['./inventoryvm.component.scss']
})
export class InventoryvmComponent {

  inventories: InventoryVM[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private dataService : DataService ) { }

ngOnInit():void {

  this.getInventories();
}

getInventories(): void {
  this.dataService.getInventoriesvm().subscribe(
    (data: InventoryVM[]) => {
      this.inventories = data;
      this.isLoading = false;
    },
    error => {
      this.errorMessage = 'There was an error retrieving the inventory data.';
      this.isLoading = false;
    }
  );
}


}
