import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureSupplierOrderComponent } from './capture-supplier-order.component';

describe('CaptureSupplierOrderComponent', () => {
  let component: CaptureSupplierOrderComponent;
  let fixture: ComponentFixture<CaptureSupplierOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaptureSupplierOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaptureSupplierOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
