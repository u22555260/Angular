import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWriteOffComponent } from './add-write-off.component';

describe('AddWriteOffComponent', () => {
  let component: AddWriteOffComponent;
  let fixture: ComponentFixture<AddWriteOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWriteOffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWriteOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
