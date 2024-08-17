import { TestBed } from '@angular/core/testing';

import { ProuductService } from './prouduct.service';

describe('ProuductService', () => {
  let service: ProuductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProuductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
