import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailViewComponent } from './contact-detail-view.component';

describe('ContactDetailViewComponent', () => {
  let component: ContactDetailViewComponent;
  let fixture: ComponentFixture<ContactDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDetailViewComponent]
    });
    fixture = TestBed.createComponent(ContactDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
