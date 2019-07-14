import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfIncome } from './prof-income.page';

describe('ProfIncome', () => {
  let component: ProfIncome;
  let fixture: ComponentFixture<ProfIncome>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfIncome ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfIncome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
