import { Injectable } from '@angular/core';

import { Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Corrida } from '../models/Corrida';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CorridaService {
  constructor(private http: HttpClient) {}

  salvarCorrida(corrida: Corrida) {
    let resposta = '';

    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`;

    this.http.post<Corrida>(urlApi, corrida).subscribe({
      next: (respostaApi) => {
        return respostaApi;
      },

      error: (msgErro) => {
        return msgErro;
      },
    });
  }

  listarCorridas() {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`;

    this.http.get<Corrida[]>(urlApi).subscribe({
      next: (corridasApi) => {
        return corridasApi;
      },
      error: (msgErro) => {
        return msgErro;
      },
    });
  }

  listarCorrida(idCorrida: Number){
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}` 

    this.http.get<Corrida[]>(urlApi).subscribe({
        next: (respostaApi) => {
            return respostaApi
        },
        error: (msgErro) => {
            return msgErro
        }
    })
  }

  excluirCorrida(idCorrida: Number) {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    this.http.delete<Corrida>(urlApi).subscribe({
      next: (respostaApi) => {
        return respostaApi;
      },
      error: (msgErro) => {
        return msgErro;
      },
    });
  }

  alterarCorrida(corrida: Corrida) {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/${corrida.id}`;

    this.http.put<Corrida>(urlApi, corrida).subscribe({
      next: (respostaApi) => {
        return respostaApi;
      },

      error: (msgErro) => {
        return msgErro;
      },
    });
  }
}
