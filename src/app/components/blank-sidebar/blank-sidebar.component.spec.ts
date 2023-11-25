import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankSidebarComponent } from './blank-sidebar.component';

describe('BlankNavbarComponent', () => {
  let component: BlankSidebarComponent;
  let fixture: ComponentFixture<BlankSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlankSidebarComponent]
    });
    fixture = TestBed.createComponent(BlankSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
