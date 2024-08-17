import { TestBed } from '@angular/core/testing';

import { StandDataService } from './stand-data.service';

describe('StandDataService', () => {
  let service: StandDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StandDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
