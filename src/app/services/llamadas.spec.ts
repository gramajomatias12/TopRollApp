import { TestBed } from '@angular/core/testing';

import { Llamadas } from './llamadas';

describe('Llamadas', () => {
  let service: Llamadas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Llamadas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
