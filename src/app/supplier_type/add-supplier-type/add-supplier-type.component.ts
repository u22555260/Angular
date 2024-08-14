import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-add-supplier-type',
  templateUrl: './add-supplier-type.component.html',
  styleUrl: './add-supplier-type.component.scss'
})
export class AddSupplierTypeComponent implements OnInit {

  supTypeForm!: FormGroup;
  supplierTypes: any[] = []

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.supTypeForm = this.fb.group({
      supplier_Type_Description: ['', Validators.required]
    })
  }  
  
  addSuppType() {
    this.dataService.addSupplierType(this.supTypeForm.value).subscribe({
      next: (res) => {
        alert('Success!');
        this.router.navigate(['supplier_type'])
      },
      error: (err) => {
        alert("Error: Please Populate All Fields")
      }
    })
  }

}
