import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';
@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrl: './update-order.component.scss'
})
export class UpdateOrderComponent implements OnInit {
  suppliers: Supplier[] = [];
  orderForm!: FormGroup;
  orderId!: number;

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {}

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

    this.route.params.subscribe(params => {
      this.orderId = +params['orderId'];
      this.dataService.getOrderId(this.orderId).subscribe(order => {
        this.orderForm.patchValue(order);
      });
    });
  }

  onSubmit() {
    const updatedOrder = this.orderForm.value;
    this.dataService.updateOrder(this.orderId, updatedOrder).subscribe({
      complete: () => 
        this.router.navigate(['orders']),
      error: (error) => alert("Error!")
    })
  }

  getSuppliers() {
    this.dataService.GetSuppliers().subscribe((result: Supplier[]) => {
      this.suppliers = result;
    })
  }

}
