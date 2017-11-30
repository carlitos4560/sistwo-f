import { TestBed, inject } from '@angular/core/testing';

import { TipoRefrescoService } from './tipo-refresco.service';

describe('TipoRefrescoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoRefrescoService]
    });
  });

  it('should be created', inject([TipoRefrescoService], (service: TipoRefrescoService) => {
    expect(service).toBeTruthy();
  }));
});
