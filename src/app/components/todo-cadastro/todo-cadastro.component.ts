import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-cadastro',
  templateUrl: './todo-cadastro.component.html',
  styleUrls: ['./todo-cadastro.component.css']
})
export class TodoCadastroComponent {

  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ){
  }

  formCadastro = new FormGroup({
    nome: new FormControl('' , [Validators.required]),

    descricao: new FormControl('', [Validators.required]),

    realizado: new FormControl('' , [Validators.required]) ,

    prioridade: new FormControl('' , [Validators.required]) ,

  });

  get form(): any {
    return this.formCadastro.controls;
  }

  onSubmit(): void {

    this.httpClient.post('http://localhost:8081/todos' , this.formCadastro.value)
      .subscribe({
        next: (data: any) => {
          this.mensagem = data.mensagem;
          this.formCadastro.reset();

        },
        error: (e) => {
          console.log(e.error);
        }
      })
  }
}

