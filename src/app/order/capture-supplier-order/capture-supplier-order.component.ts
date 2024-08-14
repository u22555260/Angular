import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-capture-supplier-order',
  templateUrl: './capture-supplier-order.component.html',
  styleUrl: './capture-supplier-order.component.scss'
})
export class CaptureSupplierOrderComponent  implements OnInit {

  receiveForm!: FormGroup;

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.receiveForm = this.fb.group({
      received_Order_Date: ['', Validators.required],
      received_By: ['John Doe', Validators.required],
      received_Status: ['', Validators.required]
    })
  }

  receiveOrder() {
    this.dataService.receiveOrder(this.receiveForm.value).subscribe({
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
