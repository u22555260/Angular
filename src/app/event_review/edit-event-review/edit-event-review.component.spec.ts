import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventReviewComponent } from './edit-event-review.component';

describe('EditEventReviewComponent', () => {
  let component: EditEventReviewComponent;
  let fixture: ComponentFixture<EditEventReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditEventReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEventReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
