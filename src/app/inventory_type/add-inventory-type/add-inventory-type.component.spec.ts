import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventoryTypeComponent } from './add-inventory-type.component';

describe('AddInventoryTypeComponent', () => {
  let component: AddInventoryTypeComponent;
  let fixture: ComponentFixture<AddInventoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddInventoryTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInventoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
