import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInventoryCategoryComponent } from './edit-inventory-category.component';

describe('EditInventoryCategoryComponent', () => {
  let component: EditInventoryCategoryComponent;
  let fixture: ComponentFixture<EditInventoryCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditInventoryCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditInventoryCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
