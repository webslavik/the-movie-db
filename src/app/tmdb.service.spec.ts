import { TestBed, inject } from '@angular/core/testing';

import { TMDbService } from './tmdb.service';

describe('TMDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TMDbService]
    });
  });

  it('should ...', inject([TMDbService], (service: TMDbService) => {
    expect(service).toBeTruthy();
  }));
});
