import { TestBed } from '@angular/core/testing';

import { InterceptarService } from './interceptar.service';

describe('InterceptarService', () => {
  let service: InterceptarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
