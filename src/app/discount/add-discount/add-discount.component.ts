import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrl: './add-discount.component.scss'
})
export class AddDiscountComponent implements OnInit {

  discountForm!: FormGroup;
  discountAmount!: number;
  hidden: string = "hidden='hidden'"

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.discountForm = this.fb.group({
      discount_Name: ['', Validators.required],
      discount_Code: ['string', Validators.required],
      discount_Percenatage: [10, Validators.required],
      start_Date: ['', Validators.required],
      end_Date: ['', Validators.required],
      is_Active: [true, Validators.required],
    })
  }

  generateDiscountCode() {
    this.dataService.GenerateDiscountCode(this.discountAmount, this.discountForm.value).subscribe({
      next:(res) => {
        alert("Successfully Generated, Your Code Is: " + res.discount_Code);
        this.router.navigate(['discount'])
      },
      error:(err) => {
        alert("Error: Please Fill In All Required Fields")
      }
    })
  }


}
