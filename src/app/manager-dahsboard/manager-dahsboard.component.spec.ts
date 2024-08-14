import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDahsboardComponent } from './manager-dahsboard.component';

describe('ManagerDahsboardComponent', () => {
  let component: ManagerDahsboardComponent;
  let fixture: ComponentFixture<ManagerDahsboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerDahsboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerDahsboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
