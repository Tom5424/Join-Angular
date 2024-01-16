import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotMyPasswordComponent } from './forgot-my-password.component';

describe('ForgotMyPasswordComponent', () => {
  let component: ForgotMyPasswordComponent;
  let fixture: ComponentFixture<ForgotMyPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotMyPasswordComponent]
    });
    fixture = TestBed.createComponent(ForgotMyPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
