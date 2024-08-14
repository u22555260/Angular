import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEventBookingComponent } from './update-event-booking.component';

describe('UpdateEventBookingComponent', () => {
  let component: UpdateEventBookingComponent;
  let fixture: ComponentFixture<UpdateEventBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateEventBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEventBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
