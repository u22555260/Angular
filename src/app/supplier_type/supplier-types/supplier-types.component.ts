import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-types',
  templateUrl: './supplier-types.component.html',
  styleUrl: './supplier-types.component.scss'
})
export class SupplierTypesComponent implements OnInit {

  supplierTypes: any[] = [];
  searchText: any;

  constructor(private dataService: DataService, private router: Router) {}
  
  ngOnInit() {
    this.getSupplierTypes();
  }

  getSupplierTypes() {
    this.dataService.GetSupplierTypes().subscribe((result) => {
      this.supplierTypes = result;
    })
  }

  deleteSupplierType(supplierTypeId: number) {
    this.dataService.deleteSupplierType(supplierTypeId).subscribe(result => {
      this.getSupplierTypes();
    })
  }
}
