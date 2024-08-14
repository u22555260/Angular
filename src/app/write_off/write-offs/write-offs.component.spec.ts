import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteOffsComponent } from './write-offs.component';

describe('WriteOffsComponent', () => {
  let component: WriteOffsComponent;
  let fixture: ComponentFixture<WriteOffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteOffsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteOffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
