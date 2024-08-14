import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInspectionItemComponent } from './edit-inspection-item.component';

describe('EditInspectionItemComponent', () => {
  let component: EditInspectionItemComponent;
  let fixture: ComponentFixture<EditInspectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditInspectionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditInspectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
