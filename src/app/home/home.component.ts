import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';
import { professores } from '../model/professores';
import { cursos } from '../model/cursos';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela:  boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Douglas', idade: 22, email: 'douglashenriquedeassis@gmail.com', curso: 'Engenharia de Materiais' },
    { nome: 'Gabrielle', idade: 22, email: 'gabih@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Thomas', idade: 20, email: 'thomas@gmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Maria', idade: 19, email: 'mariaelvira@gmail.com', curso: 'Sistemas da informacao' }
  ];

  valor1: number;
  exibetabela: boolean = false;

  listaProfessores: professores [] = [
    {nome: 'Lucas',email:'lucas@gmail.com',cadeira:'Banco de dados'},
    {nome: 'Pedro',email:'pedro@gmail.com',cadeira:'Software'},
    {nome: 'Henrique',email:'henrique@gmail.com',cadeira:'Angular'}
  ];

  valor2: number;
  exibetable: boolean = false;

  listaCursos: cursos[] = [
    {curso: 'Análise e Desenvolvimento de Sistemas',duracao:'5 períodos',tipo:'Tecnólogo'},
    {curso: 'Direito',duracao:'10 períodos',tipo:'Bacharelado'}, 
    {curso: 'Manutenção e Suporte de Informática',duracao:'3 períodos',tipo:'Tecnico'}, 
    {curso: 'Fisioterapia',duracao:'10 períodos',tipo:'Bacharel'} 
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor =5;
  }

  mudarValor(){
    this.valor++;
  }

  reiniciarValor(){
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

  mudarvalor(){
    this.valor1++;
  }

  reiniciarvalor(){
    this.valor1 = 0;
  }

  exibirtabela(){
    this.exibetabela = true;
  }

  mudarvalor1(){
    this.valor2++;
  }

  reiniciarvalor1(){
    this.valor2= 0;
  }

  exibirtable(){
    this.exibetable = true;
  }


}