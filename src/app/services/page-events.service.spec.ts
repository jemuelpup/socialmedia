import { TestBed, inject } from '@angular/core/testing';

import { PageEventsService } from './page-events.service';

describe('PageEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageEventsService]
    });
  });

  it('should be created', inject([PageEventsService], (service: PageEventsService) => {
    expect(service).toBeTruthy();
  }));
});
