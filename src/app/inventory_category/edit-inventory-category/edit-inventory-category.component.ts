import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-inventory-category',
  templateUrl: './edit-inventory-category.component.html',
  styleUrls: ['./edit-inventory-category.component.scss']
})
export class EditInventoryCategoryComponent implements OnInit{
  inventoryCategoryForm: FormGroup;
  inventoryCatgeoryId!: number;

  constructor(
    private inventoryCategoryService: DataService,
    private data: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.inventoryCategoryForm = this.data.group({
      id: [0],//-- this might be deleted if ID does not pass
      inventory_Category_Name: [''],
      inventory_Category_Description: ['']
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.inventoryCatgeoryId = +params['inventoryCategoryId'];
      this.inventoryCategoryService.getInventoryCategoryById(this.inventoryCatgeoryId).subscribe(inventoryCategory => {
        this.inventoryCategoryForm.patchValue(inventoryCategory);
      });
    });
  }


  onSubmit() {
    const updatedInventoryCategory = this.inventoryCategoryForm.value;
    this.inventoryCategoryService.editInventoryCategory(this.inventoryCatgeoryId, updatedInventoryCategory).subscribe({
      complete: () => this.router.navigate(['inventory_category']),
      error: (error) => console.error(error)
    });
  }

  cancel() {
    this.router.navigate(['inventory']); // Adjust this route according to your needs
  }

}
