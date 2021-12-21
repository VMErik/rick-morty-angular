import { TestBed } from '@angular/core/testing';

import { RmServiceService } from './rm-service.service';

describe('RmServiceService', () => {
  let service: RmServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RmServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
