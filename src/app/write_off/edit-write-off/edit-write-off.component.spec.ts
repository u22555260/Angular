import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWriteOffComponent } from './edit-write-off.component';

describe('EditWriteOffComponent', () => {
  let component: EditWriteOffComponent;
  let fixture: ComponentFixture<EditWriteOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditWriteOffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditWriteOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
