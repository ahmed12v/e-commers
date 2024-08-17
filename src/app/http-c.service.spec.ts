import { TestBed } from '@angular/core/testing';

import { HttpCService } from './http-c.service';

describe('HttpCService', () => {
  let service: HttpCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
