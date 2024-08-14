import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintTypesComponent } from './complaint-types.component';

describe('ComplaintTypesComponent', () => {
  let component: ComplaintTypesComponent;
  let fixture: ComponentFixture<ComplaintTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplaintTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplaintTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
