import { TestBed, inject } from '@angular/core/testing';

import { WampService } from './wamp.service';

describe('WampService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WampService]
    });
  });

  it('should be created', inject([WampService], (service: WampService) => {
    expect(service).toBeTruthy();
  }));
});
