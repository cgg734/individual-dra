import { TestBed } from '@angular/core/testing';

import { SharedMemeService } from './shared-meme.service';

describe('SharedMemeService', () => {
  let service: SharedMemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedMemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
