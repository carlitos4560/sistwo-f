import { TestBed, inject } from '@angular/core/testing';

import { BetweenService } from './between.service';

describe('BetweenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetweenService]
    });
  });

  it('should be created', inject([BetweenService], (service: BetweenService) => {
    expect(service).toBeTruthy();
  }));
});
