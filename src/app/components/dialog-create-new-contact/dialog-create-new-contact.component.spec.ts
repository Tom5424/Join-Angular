import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateNewContactComponent } from './dialog-create-new-contact.component';

describe('DialogCreateNewContactComponent', () => {
  let component: DialogCreateNewContactComponent;
  let fixture: ComponentFixture<DialogCreateNewContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreateNewContactComponent]
    });
    fixture = TestBed.createComponent(DialogCreateNewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
