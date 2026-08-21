import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../service/atletas-service';
import { CorridaService } from '../../service/corrida-service';
import { Pessoa } from '../../models/Pessoa';
import { Corrida } from '../../models/Corrida';

@Component({
  selector: 'app-inscricao-componente',
  imports: [FormsModule],
  templateUrl: './inscricao-componente.html',
  styleUrl: './inscricao-componente.css',
})
export class InscricaoComponente implements OnInit {

  atletas: Pessoa[] = [];
  corridas: Corrida[] = [];
  atletaSelecionado: number | null = null;
  corridaSelecionada: number | null = null;
  distancia5km: string = '';
  distancia10km: string = '';
  distancia25km: string = '';
  constructor(
    private atletaService: AtletaService,
    private corridaService: CorridaService
  ) {}

  ngOnInit(): void {

    // Buscar atletas cadastrados
    this.atletaService.listarAtletas().subscribe({
      next: (dados) => {
        this.atletas = dados;
      },
      error: (erro) => {
        console.error('Erro ao buscar atletas:', erro);
      }
    });

    // Buscar corridas cadastradas
    this.corridaService.listarCorridas().subscribe({
      next: (dados) => {
        this.corridas = dados;
      },
      error: (erro) => {
        console.error('Erro ao buscar corridas:', erro);
      }
    });

  }

  finalizarInscricao(): void {

    console.log('Atleta selecionado:', this.atletaSelecionado);
    console.log('Corrida selecionada:', this.corridaSelecionada);
    console.log('Distância:', this.distancia5km, this.distancia10km, this.distancia25km);

  }

}