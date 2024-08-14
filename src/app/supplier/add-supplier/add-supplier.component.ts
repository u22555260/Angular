import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.scss'
})
export class AddSupplierComponent implements OnInit{

  supplierForm!: FormGroup;
  supplierTypes: any[] = [];


  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.getSupplierTypes();

    this.supplierForm = this.fb.group({
      supplier_Name: ['', Validators.required],
      supplier_Address_Line_1: ['', Validators.required],
      supplier_Address_Line_2: ['', Validators.required],
      supplier_Email: ['', Validators.required],
      supplier_Contact_Number: ['', Validators.required],
      supplier_Rep_Name: ['', Validators.required],
      supplier_Rep_Surname: ['', Validators.required],
      supplier_Rep_Contact_Number: ['', Validators.required],
      supplier_Rep_Email: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postal_Code: ['', Validators.required],
      supplierTypeId: ['', Validators.required],
    })
  }

  getSupplierTypes() {
    this.dataService.GetSupplierTypes().subscribe((result) => {
      this.supplierTypes = result;
    })
  }

  addSupplier() {
    this.dataService.addSupplier(this.supplierForm.value).subscribe({
      next: (res) => {
        alert("Success");
        this.router.navigate(['supplier'])
      },
      error:(err) => {
        alert("Error: Please Fill In All Required Fields")
      }
    })
  }
}
