import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datebirth } from './datebirth.page';

describe('Datebirth', () => {
  let component: Datebirth;
  let fixture: ComponentFixture<Datebirth>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datebirth ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datebirth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
