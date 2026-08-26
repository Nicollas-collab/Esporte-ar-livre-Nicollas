import { TestBed } from '@angular/core/testing';

import { AtletaListaComponent } from './atleta-lista-component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { Pessoa } from '../../models/Pessoa';
import { AtletaService } from '../../service/atletas-service';

describe('AtletaListaComponent', () => {
  let compAtleta: AtletaListaComponent;
  let httpMock: HttpTestingController;
  let service: AtletaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AtletaListaComponent, provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    compAtleta = TestBed.inject(AtletaListaComponent);

    httpMock = TestBed.inject(HttpTestingController);

    service = TestBed.inject(AtletaService);
  });

  it('Resultado esperado é calcular corretamente a idade', () => {
    const resultado = compAtleta.MostrarIdade('1976-02-28');
    expect(resultado).toBe(50);
  });

  it('Resultado esperado a lista de atletas', () => {
    const pessoas: Pessoa[] = [
      {
        nome: 'Rute',
        cpf: 78945612300,
        sexo: '',
        cep: 49001456,
        ruaLogradouro: 'Rua Capela',
        bairro: 'Centro',
        cidade: 'Aracaju',
        uf: 'SE',
        data_nascimento: '1980-02-12',
        id: 1,
      },
      {
        nome: 'Maria',
        cpf: 78945612300,
        sexo: '',
        cep: 49001456,
        ruaLogradouro: 'Rua Capela',
        bairro: 'Centro',
        cidade: 'Aracaju',
        uf: 'SE',
        data_nascimento: '1980-02-12',
        id: 2,
      },
    ];

    service.listarAtletas().subscribe(result => {

      expect(result).toEqual(pessoas)
    });

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta')

    expect(requisicao.request.method).toBe('GET')

    requisicao.flush(pessoas)

  });

  it('Resultado esperado adicionar atleta', () =>{
    const pessoa: Pessoa ={
      nome: 'Chicó',
      cpf: 12345678900,
      sexo: '',
      cep: 49001456,
      ruaLogradouro: 'Rua Capela',
      bairro: 'Centro',
      cidade: 'Aracaju',
      uf: 'SE',
      data_nascimento: '1980-02-12',
      id: 3
    }
    service.adicionarAtleta(pessoa).subscribe(result =>{
      expect(result).toEqual(pessoa)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta')

    expect(requisicao.request.method).toBe('POST')

    requisicao.flush(pessoa)

  })

  it('Resultado esperado  alterar atleta',() => {
    const pessoa: Pessoa ={
      nome: 'joservaldo',
      cpf: 12345678900,
      sexo: '',
      cep: 49001456,
      ruaLogradouro: 'Rua Capela',
      bairro: 'Centro',
      cidade: 'Aracaju',
      uf: 'SE',
      data_nascimento: '1980-02-12',
      id: 3
    }

    service.alterarAtleta(pessoa).subscribe(result =>{
      expect(result).toEqual(pessoa)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/3')

    expect(requisicao.request.method).toBe('PUT')

    requisicao.flush(pessoa)
  })

  it('Resultado esperado  alterar atleta',() => {
    const pessoa: Pessoa ={
      nome: 'joservaldo',
      cpf: 12345678900,
      sexo: '',
      cep: 49001456,
      ruaLogradouro: 'Rua Capela',
      bairro: 'Centro',
      cidade: 'Aracaju',
      uf: 'SE',
      data_nascimento: '1980-02-12',
      id: 4
    }

    service.exluirAtleta(pessoa).subscribe(result =>{
      expect(result).toEqual(pessoa)
    })

    const requisicao = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/4')

    expect(requisicao.request.method).toBe('DELETE')

    requisicao.flush(pessoa)
  })

});
