import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplaintTypeComponent } from './add-complaint-type.component';

describe('AddComplaintTypeComponent', () => {
  let component: AddComplaintTypeComponent;
  let fixture: ComponentFixture<AddComplaintTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddComplaintTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddComplaintTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
