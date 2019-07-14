import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Acquire } from './acquire.page';

describe('Acquire', () => {
  let component: Acquire;
  let fixture: ComponentFixture<Acquire>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Acquire ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Acquire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
