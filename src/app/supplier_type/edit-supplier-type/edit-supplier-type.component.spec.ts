import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupplierTypeComponent } from './edit-supplier-type.component';

describe('EditSupplierTypeComponent', () => {
  let component: EditSupplierTypeComponent;
  let fixture: ComponentFixture<EditSupplierTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSupplierTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSupplierTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
