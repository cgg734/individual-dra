import { TestBed } from '@angular/core/testing';

import { ScrappingService } from './scrapping.service';

describe('ScrappingService', () => {
  let service: ScrappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
