import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { AtletasService } from '../../service/atletas-service';
import { Pessoa } from '../../models/Pessoa';

@Component({
  selector: 'app-atleta-componente',
  imports: [FormsModule],
  templateUrl: './atleta-componente.html',
  styleUrl: './atleta-componente.css',
})
export class AtletaComponente {
  nome = ''
  cpf = ''
  sexo = ''
  cep = ''
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  //declaração do construtor
  constructor(private atletaService: AtletasService){

  }

 //declação de funções
 exibeDados(){
 console.log(this.nome, this.cpf, this.sexo, this.cep, this.ruaLogradouro, this.bairro, this.cidade, this.uf)
 }

  salvarAtleta(){
    const pessoaAtleta = new Pessoa()
    pessoaAtleta.nome = this.nome
    pessoaAtleta.cpf = this.cpf
    pessoaAtleta.sexo = this.sexo
    pessoaAtleta.cep = this.cep
    pessoaAtleta.ruaLogradouro = this.ruaLogradouro
    pessoaAtleta.bairro = this.bairro
    pessoaAtleta.cidade = this.cidade
    pessoaAtleta.uf = this.uf

    this.atletaService.adicionar(pessoaAtleta)

    this.atletaService.listar

    this.limparAtributos()
  }

  limparAtributos(){
    this.nome = ''
    this.cpf = 0
    this.sexo = ''
    this.cep = 0
    this.ruaLogradouro
    this.bairro = ''
    this.cidade = ''
    this.uf = ''
  }

}
