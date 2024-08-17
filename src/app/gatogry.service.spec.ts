import { TestBed } from '@angular/core/testing';

import { GatogryService } from './gatogry.service';

describe('GatogryService', () => {
  let service: GatogryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatogryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
