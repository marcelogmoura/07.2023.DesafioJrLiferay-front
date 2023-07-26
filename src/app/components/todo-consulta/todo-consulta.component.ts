import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-consulta',
  templateUrl: './todo-consulta.component.html',
  styleUrls: ['./todo-consulta.component.css']
})
export class TodoConsultaComponent implements OnInit {

  todos: any[] = [];
  mensagem: string = '';

  constructor(
    private HttpClient: HttpClient
  ){
  }

  ngOnInit(): void {

    this.HttpClient.get('http://localhost:8081/todos')
      .subscribe({
        next: (data) => {
          this.todos = data as any[];
        },
        error: (e) => {
          console.log(e);
        }
      });
  }

  onDelete(id: number): void {
    if(window.confirm('Excluir toDo selecionado?')){
      this.HttpClient.delete('http://localhost:8081/todos/' + id)
        .subscribe({
          next: (data: any) => {
            this.mensagem = data.mensagem;
            this.ngOnInit();
          },
          error:(e) => {
            this.mensagem = e.error.mensagem;
          }
        })

    }
  }

}
