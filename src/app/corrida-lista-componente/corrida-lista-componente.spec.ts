import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaListaComponente } from './corrida-lista-componente';

describe('CorridaListaComponente', () => {
  let component: CorridaListaComponente;
  let fixture: ComponentFixture<CorridaListaComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridaListaComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(CorridaListaComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
