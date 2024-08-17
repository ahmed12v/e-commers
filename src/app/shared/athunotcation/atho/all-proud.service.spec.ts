import { TestBed } from '@angular/core/testing';

import { AllProudService } from './all-proud.service';

describe('AllProudService', () => {
  let service: AllProudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
