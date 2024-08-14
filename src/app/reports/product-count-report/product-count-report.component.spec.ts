import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCountReportComponent } from './product-count-report.component';

describe('ProductCountReportComponent', () => {
  let component: ProductCountReportComponent;
  let fixture: ComponentFixture<ProductCountReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCountReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCountReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
