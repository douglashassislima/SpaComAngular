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
    {nome: 'Francisco',email:'francisco@gmail.com',cadeira:'Lógica de Programação'},
    {nome: 'Monica',email:'monica@gmail.com',cadeira:'C#'},
    {nome: 'Joaquim',email:'joaquim@gmail.com',cadeira:'JavaScript e Angular'}
  ];

  valor2: number;
  exibetable: boolean = false;

  listaCursos: cursos[] = [
    {curso: 'Análise e Desenvolvimento de Sistemas',duracao:'5 períodos',tipo:'Tecnólogo'},
    {curso: 'Engenharia de Materiais',duracao:'10 períodos',tipo:'Bacharelado'}, 
    {curso: 'Engenharia de computacao',duracao:'10 períodos',tipo:'Bacharelado'}, 
    {curso: 'Sistema de Informacao',duracao:'10 períodos',tipo:'Bacharelado'} 
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