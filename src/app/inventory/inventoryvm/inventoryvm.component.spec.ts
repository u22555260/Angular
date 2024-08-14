import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryvmComponent } from './inventoryvm.component';

describe('InventoryvmComponent', () => {
  let component: InventoryvmComponent;
  let fixture: ComponentFixture<InventoryvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryvmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
