import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../shared/supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validateForm';

@Component({
  selector: 'app-edit-inspection-item',
  templateUrl: './edit-inspection-item.component.html',
  styleUrl: './edit-inspection-item.component.scss'
})
export class EditInspectionItemComponent implements OnInit {
  inspectionForm!: FormGroup;
  inventories: any[] = [];
  inspectionItemId!: number;

  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getInventories();

    this.inspectionForm = this.fb.group({
      inspection_Item_Name: ['', Validators.required],
      inspection_Item_Condition: ['', Validators.required],
      inventoryId: ['', Validators.required],
    })

    this.route.params.subscribe(params => {
      this.inspectionItemId = +params['inspectionItemId'];
      this.dataService.GetInspectionItemById(this.inspectionItemId).subscribe(inspection => {
        this.inspectionForm.patchValue(inspection);
      });
    });
  }

  getInventories() {
    this.dataService.GetInventories().subscribe((result) => {
      this.inventories = result;    
    });
  }

  onSubmit() {
    const updatedInspection = this.inspectionForm.value;
    this.dataService.UpdateInspectionItem(this.inspectionItemId, updatedInspection).subscribe({
      complete: () =>
        this.router.navigate(['inspection_item']),
      error: () => alert("Error!")
    })
  }
}
