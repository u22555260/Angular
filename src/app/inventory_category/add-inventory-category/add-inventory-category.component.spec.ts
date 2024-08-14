import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventoryCategoryComponent } from './add-inventory-category.component';

describe('AddInventoryCategoryComponent', () => {
  let component: AddInventoryCategoryComponent;
  let fixture: ComponentFixture<AddInventoryCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddInventoryCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInventoryCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
