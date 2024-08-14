import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import ValidateForm from '../../helpers/validateForm';


@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrl: './edit-supplier.component.scss'
})
export class EditSupplierComponent {
  supplierId!: number;
  supplierForm!: FormGroup;
  supplierTypes: any[] = [];


  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {}

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

    this.route.params.subscribe(params => {
      this.supplierId = +params['supplierId'];
      this.dataService.getSupplierById(this.supplierId).subscribe(supplier => {
        this.supplierForm.patchValue(supplier);
      });
    });
  }

  getSupplierTypes() {
    this.dataService.GetSupplierTypes().subscribe((result) => {
      this.supplierTypes = result;
    })
  }

  onSubmit() {
    const updatedSupplier = this.supplierForm.value;
    this.dataService.updateSupplier(this.supplierId, updatedSupplier).subscribe({
      complete: () =>
        this.router.navigate(['supplier']),
      error: () => alert("Error!")
    })
  }
}
