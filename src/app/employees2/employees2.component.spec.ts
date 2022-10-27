import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employees2Component } from './employees2.component';

describe('Employees2Component', () => {
  let component: Employees2Component;
  let fixture: ComponentFixture<Employees2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Employees2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employees2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
