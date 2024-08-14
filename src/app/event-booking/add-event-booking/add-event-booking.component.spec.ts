import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventBookingComponent } from './add-event-booking.component';

describe('AddEventBookingComponent', () => {
  let component: AddEventBookingComponent;
  let fixture: ComponentFixture<AddEventBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEventBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEventBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
