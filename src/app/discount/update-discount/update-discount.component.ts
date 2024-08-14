import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-update-discount',
  templateUrl: './update-discount.component.html',
  styleUrl: './update-discount.component.scss'
})
export class UpdateDiscountComponent implements OnInit {

  discountForm!: FormGroup;
  discountAmount!: number;
  hidden: string = "hidden='hidden'";
  discountId!: number;

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    this.discountForm = this.fb.group({
      discount_Name: ['', Validators.required],
      discount_Code: ['', Validators.required],
      discount_Percenatage: ['', Validators.required],
      start_Date: ['', Validators.required],
      end_Date: ['', Validators.required],
      is_Active: ['', Validators.required],
    })

    this.route.params.subscribe(params => {
      this.discountId = +params['discountId'];
      this.dataService.GetDiscountById(this.discountId).subscribe(discount => {
        this.discountForm.patchValue(discount);
      })
    })
  }

  onSubmit() {
    const updatedDiscount = this.discountForm.value;
    this.dataService.UpdateDiscount(this.discountId, updatedDiscount).subscribe({
      complete: () => 
        this.router.navigate(['discount']),
      error: (error) => alert("Error!")
    })
  }
}
