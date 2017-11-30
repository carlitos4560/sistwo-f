import { TestBed, inject } from '@angular/core/testing';

import { PlatoService } from './plato.service';

describe('PlatoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatoService]
    });
  });

  it('should be created', inject([PlatoService], (service: PlatoService) => {
    expect(service).toBeTruthy();
  }));
});
