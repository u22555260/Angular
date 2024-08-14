import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsBookedReportComponent } from './rooms-booked-report.component';

describe('RoomsBookedReportComponent', () => {
  let component: RoomsBookedReportComponent;
  let fixture: ComponentFixture<RoomsBookedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomsBookedReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomsBookedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
