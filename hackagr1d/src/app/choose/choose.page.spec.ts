import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Choose } from './choose.page';

describe('Choose', () => {
  let component: Choose;
  let fixture: ComponentFixture<Choose>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Choose ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Choose);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
