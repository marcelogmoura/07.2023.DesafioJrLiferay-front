import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-edicao',
  templateUrl: './todo-edicao.component.html',
  styleUrls: ['./todo-edicao.component.css']
})
export class TodoEdicaoComponent implements OnInit{

  mensagem: string = '';

  constructor(
    private HttpClient:HttpClient,
    private activatedRoute: ActivatedRoute
  ){
  }

  ngOnInit(): void {

    let idTodo = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.HttpClient.get('http://localhost:8081/todos/' +idTodo )
      .subscribe({
        next:(data: any) =>{
          //console.log(data);
          this.formEdicao.patchValue(data);
        },
        error: (e) =>{
          console.log(e);
        }
      })
  }

  formEdicao = new FormGroup({

    id: new FormControl('' ) ,

    nome: new FormControl('' , [Validators.required]),

    descricao: new FormControl('', [Validators.required]),

    realizado: new FormControl('' , [Validators.required]) ,

    prioridade: new FormControl('' , [Validators.required]) ,

  });

  get form(): any {
    return this.formEdicao.controls;
  }

  onSubmit(): void {
    this.HttpClient.put('http://localhost:8081/todos' , this.formEdicao.value)
      .subscribe({
        next: (data: any) =>{
          this.mensagem = data.mensagem;
        },
        error:(e) =>{
          this.mensagem = e.error.mensagem;
        }
      })
  }

}
