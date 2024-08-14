import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTypesComponent } from './inventory-types.component';

describe('InventoryTypesComponent', () => {
  let component: InventoryTypesComponent;
  let fixture: ComponentFixture<InventoryTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
