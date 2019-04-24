import { TestBed } from '@angular/core/testing';

import { FormSubService } from './form-sub.service';

describe('FormSubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormSubService = TestBed.get(FormSubService);
    expect(service).toBeTruthy();
  });
});
