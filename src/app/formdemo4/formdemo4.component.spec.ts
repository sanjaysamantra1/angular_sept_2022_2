import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formdemo4Component } from './formdemo4.component';

describe('Formdemo4Component', () => {
  let component: Formdemo4Component;
  let fixture: ComponentFixture<Formdemo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formdemo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formdemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
