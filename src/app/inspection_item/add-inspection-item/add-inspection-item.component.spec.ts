import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInspectionItemComponent } from './add-inspection-item.component';

describe('AddInspectionItemComponent', () => {
  let component: AddInspectionItemComponent;
  let fixture: ComponentFixture<AddInspectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddInspectionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInspectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
