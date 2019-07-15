import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaLlamadaPage } from './prueba-llamada.page';

describe('PruebaLlamadaPage', () => {
  let component: PruebaLlamadaPage;
  let fixture: ComponentFixture<PruebaLlamadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaLlamadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaLlamadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
