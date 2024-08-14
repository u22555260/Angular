import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemHelpComponent } from './system-help.component';

describe('SystemHelpComponent', () => {
  let component: SystemHelpComponent;
  let fixture: ComponentFixture<SystemHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
