import { TestBed } from '@angular/core/testing';

import { PagesExemploService } from './pages-exemplo.service';

describe('PagesExemploService', () => {
  let service: PagesExemploService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesExemploService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
