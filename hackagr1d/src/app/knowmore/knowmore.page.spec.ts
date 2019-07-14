import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMore } from './knowmore.page';

describe('KnowMore', () => {
  let component: KnowMore;
  let fixture: ComponentFixture<KnowMore>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowMore ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
