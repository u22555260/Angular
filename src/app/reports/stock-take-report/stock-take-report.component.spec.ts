import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTakeReportComponent } from './stock-take-report.component';

describe('StockTakeReportComponent', () => {
  let component: StockTakeReportComponent;
  let fixture: ComponentFixture<StockTakeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockTakeReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockTakeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
