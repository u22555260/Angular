import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss'
})
export class CreateOrderComponent implements OnInit {

  suppliers: Supplier[] = [];
  orderForm!: FormGroup;
  

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getSuppliers();

    this.orderForm = this.fb.group({
      order_Description: ['', Validators.required],
      order_Date: ['', Validators.required],
      order_Status: ['', Validators.required],
      supplierId: ['', Validators.required],
      employeeId: [1, Validators.required],
      shiftId: [1, Validators.required],
    })
  }

  getSuppliers() {
    this.dataService.GetSuppliers().subscribe((result: Supplier[]) => {
      this.suppliers = result;
    })
  }

  createOrder()
  {
    this.dataService.createOrder(this.orderForm.value).subscribe({ 
      next:(res) => {
        alert("Success");
        this.router.navigate(['orders'])
      },
      error:(err) => {
        alert("Error: Please Fill In All Required Fields")
      }
    })
  }
}
