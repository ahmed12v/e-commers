import { TestBed } from '@angular/core/testing';

import { AthoService } from './atho.service';

describe('AthoService', () => {
  let service: AthoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
