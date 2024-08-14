import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomBookingComponent } from './add-room-booking.component';

describe('AddRoomBookingComponent', () => {
  let component: AddRoomBookingComponent;
  let fixture: ComponentFixture<AddRoomBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRoomBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRoomBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
