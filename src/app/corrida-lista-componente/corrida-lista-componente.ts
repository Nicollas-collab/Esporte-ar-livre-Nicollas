import { Component } from '@angular/core';
import { CorridaService } from '../service/corrida-service';
import { Corrida } from '../models/Corrida';

@Component({
  selector: 'app-corrida-lista-componente',
  imports: [],
  templateUrl: './corrida-lista-componente.html',
  styleUrl: './corrida-lista-componente.css',
})
export class CorridaListaComponente {

listaCorridas = signal<Corrida[]>([])

constructor(private corridaService: CorridaService){

rgOnInit(){
  this.listar()
}


//listar
listar(){
  console.table(this.listaCorridas.listarCorridas())//([...this.corridaService.listarCorridas()])
}

}

}
