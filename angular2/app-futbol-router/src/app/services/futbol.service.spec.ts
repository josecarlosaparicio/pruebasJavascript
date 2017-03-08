import { TestBed, inject } from '@angular/core/testing';

import { FutbolService } from './futbol.service';

describe('FutbolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FutbolService]
    });
  });

  it('should ...', inject([FutbolService], (service: FutbolService) => {
    expect(service).toBeTruthy();
  }));
});
