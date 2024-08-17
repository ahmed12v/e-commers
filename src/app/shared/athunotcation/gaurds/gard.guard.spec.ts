import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gardGuard } from './gard.guard';

describe('gardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
