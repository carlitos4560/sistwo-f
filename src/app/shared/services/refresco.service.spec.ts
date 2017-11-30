import { TestBed, inject } from '@angular/core/testing';

import { RefrescoService } from './refresco.service';

describe('RefrescoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefrescoService]
    });
  });

  it('should be created', inject([RefrescoService], (service: RefrescoService) => {
    expect(service).toBeTruthy();
  }));
});
