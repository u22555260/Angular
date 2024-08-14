import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-inventory-type',
  templateUrl: './edit-inventory-type.component.html',
  styleUrls: ['./edit-inventory-type.component.scss']
})
export class EditInventoryTypeComponent implements OnInit{
  inventoryTypeForm: FormGroup;
  inventoryTypeyId!: number;

  constructor(
    private inventoryTypeService: DataService,
    private data: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.inventoryTypeForm = this.data.group({
      inventory_Type_Name: [''],
      inventory_Type_Description: ['']
    });
  }

  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.inventoryTypeyId = +params['inventoryTypeId'];
      this.inventoryTypeService.getInventoryTypeById(this.inventoryTypeyId).subscribe(inventoryType => {
        this.inventoryTypeForm.patchValue(inventoryType);
      });
    });
  }


  onSubmit() {
    const updatedInventoryType = this.inventoryTypeForm.value;
    this.inventoryTypeService.editInventoryType(this.inventoryTypeyId, updatedInventoryType).subscribe({
      complete: () => this.router.navigate(['inventory_type']),
      error: (error) => console.error(error)
    });
  }

  cancel() {
    this.router.navigate(['inventory_type']); // Adjust this route according to your needs
  }


}
