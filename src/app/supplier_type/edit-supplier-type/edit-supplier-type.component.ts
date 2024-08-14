import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-edit-supplier-type',
  templateUrl: './edit-supplier-type.component.html',
  styleUrl: './edit-supplier-type.component.scss'
})
export class EditSupplierTypeComponent implements OnInit {
  supTypeForm!: FormGroup;
  supplierTypes: any[] = []
  supplierTypeId!: number;

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    this.supTypeForm = this.fb.group({
      supplier_Type_Description: ['', Validators.required]
    })

    this.route.params.subscribe(params => {
      this.supplierTypeId = +params['supplierTypeId'];
      this.dataService.getSupplierypeById(this.supplierTypeId).subscribe(suppType => {
        this.supTypeForm.patchValue(suppType);
      });
    });
  }  
  
  onSubmit() {
    const updatedOrder = this.supTypeForm.value;
    this.dataService.editSupplierType(this.supplierTypeId, updatedOrder).subscribe({
      complete: () => 
        this.router.navigate(['supplier_type']),
      error: (error) => alert("Error!")
    })
  }
}
