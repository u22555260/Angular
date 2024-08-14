import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComplaintTypeComponent } from './edit-complaint-type.component';

describe('EditComplaintTypeComponent', () => {
  let component: EditComplaintTypeComponent;
  let fixture: ComponentFixture<EditComplaintTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditComplaintTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditComplaintTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
