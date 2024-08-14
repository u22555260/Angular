import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.scss'
})
export class SuppliersComponent implements OnInit {

  suppliers: any[] = [];
  searchText: any;
  
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
  this.getSuppliers()
  }

  getSuppliers() {
    this.dataService.GetSuppliers().subscribe((result) => {
      this.suppliers = result;
      console.log(this.suppliers);
    })
  }

  deleteSupplier(supplierId: number) {
    this.dataService.deleteSupplier(supplierId).subscribe(result => {
      this.getSuppliers();
    })
  }
}
