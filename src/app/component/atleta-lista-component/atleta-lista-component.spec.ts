import { TestBed } from '@angular/core/testing';

import { AtletaListaComponent } from '.atleta-lista-component';
import { provideHttpClient } from '@angular/common/http';

describe('AtletaListaComponent', () => {
  let service: AtletaListaComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AtletaListaComponent,
        provideHttpClient
      ]
    }).compileComponents();

    service = TestBed.inject(AtletaListaComponent)

  });

  it('Resultado esperado é calcular corretamente a idade', () => {
    const resultado = service.MostrarIdade('1976-02-28')
    expect(resultado).toBeTruthy(50);
  });
});
