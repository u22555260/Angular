import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventBookingComponent } from './edit-event-booking.component';

describe('EditEventBookingComponent', () => {
  let component: EditEventBookingComponent;
  let fixture: ComponentFixture<EditEventBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditEventBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEventBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
