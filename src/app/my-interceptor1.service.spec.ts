import { TestBed } from '@angular/core/testing';

import { MyInterceptor1Service } from './my-interceptor1.service';

describe('MyInterceptor1Service', () => {
  let service: MyInterceptor1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyInterceptor1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
