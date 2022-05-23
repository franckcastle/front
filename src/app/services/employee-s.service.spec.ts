import { TestBed } from '@angular/core/testing';

import { EmployeeSService } from './employee-s.service';

describe('EmployeeSService', () => {
  let service: EmployeeSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
