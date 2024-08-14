import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenlynNavbarComponent } from './menlyn-navbar.component';

describe('MenlynNavbarComponent', () => {
  let component: MenlynNavbarComponent;
  let fixture: ComponentFixture<MenlynNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenlynNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenlynNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
