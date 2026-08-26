import { TestBed } from '@angular/core/testing';

import { AtletaService } from './atletas-service';

describe('AtletasService', () => {
  let service: AtletaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtletaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
