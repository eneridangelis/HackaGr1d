import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCar1 } from './buycar1.page';

describe('BuyCar1', () => {
  let component: BuyCar1;
  let fixture: ComponentFixture<BuyCar1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCar1 ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCar1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
