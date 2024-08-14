import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventReviewComponent } from './add-event-review.component';

describe('AddEventReviewComponent', () => {
  let component: AddEventReviewComponent;
  let fixture: ComponentFixture<AddEventReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEventReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEventReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
