import { TestBed } from '@angular/core/testing';

import { CreateNewContactService } from './create-new-contact.service';

describe('CreateNewContactService', () => {
  let service: CreateNewContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateNewContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
