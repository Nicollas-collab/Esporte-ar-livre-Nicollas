import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AtletaService } from '../../service/atletas-service';
import{ ActivatedRoute } from '@angular/router'
import { Pessoa } from '../../models/Pessoa';

@Component({
  selector: 'app-atleta-componente',
  imports: [FormsModule],
  templateUrl: './atleta-componente.html',
  styleUrl: './atleta-componente.css',
})
export class AtletaComponente {

   //DELCARAÇÃO DOS ATRIBUTOS DO COMPONENTE
   id = 0
   nome = ''
   cpf = 0
   data_nascimento = ''
   sexo = ''
   cep = 0
   ruaLogradouro = ''
   bairro = ''
   cidade = ''
   uf = ''
  altura = 0
  peso = 0

   editar = false
   idAtleta = 0
 
   //DECLARAÇÃO DO CONSTRUTOR  
   constructor(private atletaService: AtletaService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }
 
   //DECLARAÇÃO DE FUNÇÕES
   exibeDados() {
     console.log(this.nome, this.cpf, this.data_nascimento, this.sexo, this.ruaLogradouro, this.bairro, this.cidade, this.uf, this.altura, this.peso)
   }
 
   ngOnInit() {
     this.idAtleta = Number(this.route.snapshot.paramMap.get('id'))
 
     if (this.idAtleta > 0) {
       this.editar = true
       this.carregaCampo(this.idAtleta)
     }
   }

 
   carregaCampo(idAtleta: number) {
     this.atletaService.listarAtleta(idAtleta)
       .subscribe({
         next: (objAtleta) => {
          this.data_nascimento = objAtleta.data_nascimento
           this.id = objAtleta.id
           this.nome = objAtleta.nome
           this.cpf = objAtleta.cpf
           this.sexo = objAtleta.sexo
           this.cep = objAtleta.cep
           this.ruaLogradouro = objAtleta.ruaLogradouro
           this.bairro = objAtleta.bairro
           this.cidade = objAtleta.cidade
           this.uf = objAtleta.uf
           this.altura = objAtleta.altura 
           this.peso == objAtleta.peso
 
           this.cdr.detectChanges()
         }, error: (msgErro) => {
           console.log("Erro ao Listar  o atleta ", msgErro)
         }
       })
   }
 
   enviaDadosAtleta() {
     const pessoaAtleta = new Pessoa()
     pessoaAtleta.nome = this.nome
     pessoaAtleta.cpf = this.cpf
     pessoaAtleta.data_nascimento = this.data_nascimento
     pessoaAtleta.sexo = this.sexo
     pessoaAtleta.cep = this.cep
     pessoaAtleta.ruaLogradouro = this.ruaLogradouro
     pessoaAtleta.bairro = this.bairro
     pessoaAtleta.cidade = this.cidade
     pessoaAtleta.uf = this.uf
     pessoaAtleta.altura = this.altura
     pessoaAtleta.peso = this.peso
 
     if (!this.editar) {
       this.atletaService.adicionarAtleta(pessoaAtleta)
         .subscribe({
           next: (resposta) => {
             console.log(resposta)
           },
           error: (msgErro) => {
             console.log("Erro ao cadastrar  o atleta ", msgErro)
           }
         })
     } else {
       pessoaAtleta.id = this.idAtleta
       
       this.atletaService.alterarAtleta(pessoaAtleta)
         .subscribe({
           next: (resposta) => {
             console.log(pessoaAtleta)
 
             console.log(resposta)
           },
           error: (msgErro) => {
             console.log("Erro ao alterar  o atleta ", msgErro)
           }
         })
 
     }
 
     this.limparAtributos()
 
   }
 
   listaAtleta(idAtleta: number) {
     this.atletaService.listarAtleta(idAtleta)
       .subscribe({
         next: (dados) => {
           console.table(dados)
         },
         error: (msgErro) => {
           console.log("Erro ao listar atletas ", msgErro)
         }
       })
   }
 
   limparAtributos() {
     this.nome = ''
     this.cpf = 0
     this.data_nascimento = ''
     this.sexo = ''
     this.cep = 0
     this.ruaLogradouro = ''
     this.bairro = ''
     this.cidade = ''
     this.uf = ''
     this.altura = 0
     this.peso = 0
   }

  /*
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
*/
}
