import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoomTyoeComponent } from './edit-room-tyoe.component';

describe('EditRoomTyoeComponent', () => {
  let component: EditRoomTyoeComponent;
  let fixture: ComponentFixture<EditRoomTyoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRoomTyoeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRoomTyoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
