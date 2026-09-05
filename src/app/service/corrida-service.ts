import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Corrida } from '../models/Corrida';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CorridaService {
  constructor(private http: HttpClient) { }

  salvarCorrida(corrida: Corrida):Observable<Corrida> {
    let resposta = '';

    //const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`;

    const urlApi = `http://127.0.0.1:8000/corrida/`

    return this.http.post<Corrida>(urlApi, corrida)

  }

  //listar todas as corridas
  listarCorridas(): Observable<Corrida[]> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`;

    return this.http.get<Corrida[]>(urlApi)
  }

  //litar uma corrida
  listarCorrida(idCorrida: Number): Observable<Corrida>{
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}` 

    return this.http.get<Corrida>(urlApi)

  }

  excluirCorrida(idCorrida: Number) {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`;

    return this.http.get<Corrida>(urlApi)

  }

  alterarCorrida(corrida: Corrida): Observable<Corrida> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`;

    return this.http.put<Corrida>(urlApi, corrida)
  }
}
