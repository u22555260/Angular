import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';


@Component({
  selector: 'app-edit-vat',
  templateUrl: './edit-vat.component.html',
  styleUrl: './edit-vat.component.scss'
})
export class EditVatComponent implements OnInit {
  
  vatForm!: FormGroup;
  vatId!: number;

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.vatForm = this.fb.group({
      vaT_Amount: ['', Validators.required]
    })

    this.route.params.subscribe(params => {
      this.vatId = +params['vatId'];
      this.dataService.GetVATById(this.vatId).subscribe(vats => {
        this.vatForm.patchValue(vats);
      })
    })
  }

  onSubmit() {
    const updatedVAT = this.vatForm.value;
    this.dataService.UpdateVAT(this.vatId, updatedVAT).subscribe({
      complete: () => {
        alert("Succesfully Updated"),
        this.router.navigate(['vat'])
      },
      error: (err) => alert(['Error!'])
    })
  }
}
