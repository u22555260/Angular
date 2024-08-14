import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-add-inspection-item',
  templateUrl: './add-inspection-item.component.html',
  styleUrl: './add-inspection-item.component.scss'
})
export class AddInspectionItemComponent implements OnInit {

  inspectionForm!: FormGroup;
  inventories: any[] = [];
  
  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.getInventories();

    this.inspectionForm = this.fb.group({
      inspection_Item_Name: ['', Validators.required],
      inspection_Item_Condition: ['', Validators.required],
      inventoryId: ['', Validators.required],
    })
  }

  getInventories() {
    this.dataService.GetInventories().subscribe((result) => {
      this.inventories = result;    
    });
  }

  onSubmit() {
    this.dataService.AddInspectionItem(this.inspectionForm.value).subscribe({
      next: (res) => {
        alert("Success!!");
        this.router.navigate(['/inspection_item'])
      },
      error: (err) => {
        alert("Error: Please Fill In All Required Fields")
      }
    })
  }
}
