import { TestBed, inject } from '@angular/core/testing';

import { CategoriaRefrescoService } from './categoria-refresco.service';

describe('CategoriaRefrescoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriaRefrescoService]
    });
  });

  it('should be created', inject([CategoriaRefrescoService], (service: CategoriaRefrescoService) => {
    expect(service).toBeTruthy();
  }));
});
