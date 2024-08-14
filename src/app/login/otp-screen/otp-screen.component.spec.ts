import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpScreenComponent } from './otp-screen.component';

describe('OtpScreenComponent', () => {
  let component: OtpScreenComponent;
  let fixture: ComponentFixture<OtpScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtpScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtpScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
