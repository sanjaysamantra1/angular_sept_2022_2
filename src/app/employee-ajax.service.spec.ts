import { TestBed } from '@angular/core/testing';

import { EmployeeAjaxService } from './employee-ajax.service';

describe('EmployeeAjaxService', () => {
  let service: EmployeeAjaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAjaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
