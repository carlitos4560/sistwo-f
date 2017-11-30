import { TestBed, inject } from '@angular/core/testing';

import { PolloService } from './pollo.service';

describe('PolloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolloService]
    });
  });

  it('should be created', inject([PolloService], (service: PolloService) => {
    expect(service).toBeTruthy();
  }));
});
