import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypeReportComponent } from './event-type-report.component';

describe('EventTypeReportComponent', () => {
  let component: EventTypeReportComponent;
  let fixture: ComponentFixture<EventTypeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventTypeReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventTypeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
