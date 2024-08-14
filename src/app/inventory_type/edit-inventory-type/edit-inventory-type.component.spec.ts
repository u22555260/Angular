import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInventoryTypeComponent } from './edit-inventory-type.component';

describe('EditInventoryTypeComponent', () => {
  let component: EditInventoryTypeComponent;
  let fixture: ComponentFixture<EditInventoryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditInventoryTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditInventoryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
