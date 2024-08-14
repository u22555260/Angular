import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection-items',
  templateUrl: './inspection-items.component.html',
  styleUrl: './inspection-items.component.scss'
})
export class InspectionItemsComponent implements OnInit{

  items: any[] = [];
  inventories: any[] = []
  searchText: any;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.getInventories();
    this.getInspections();
  }

  getInspections() {
    this.dataService.GetInspectionItems().subscribe(result => {
      this.items = result;
    })
  }

  getInventories() {
    this.dataService.GetInventories().subscribe((result) => {
      this.inventories = result;    
    });
  }

  resolveInspectionItem(id: number) {
    this.dataService.DeleteInspectionItem(id).subscribe(result => {
      this.getInspections();
    })
  }
}
