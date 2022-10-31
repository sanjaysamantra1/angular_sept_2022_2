import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAJAXComponent } from './employee-ajax.component';

describe('EmployeeAJAXComponent', () => {
  let component: EmployeeAJAXComponent;
  let fixture: ComponentFixture<EmployeeAJAXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAJAXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAJAXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
