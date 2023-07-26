import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TodoCadastroComponent } from './components/todo-cadastro/todo-cadastro.component';
import { TodoConsultaComponent } from './components/todo-consulta/todo-consulta.component';
import { TodoEdicaoComponent } from './components/todo-edicao/todo-edicao.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '' , pathMatch: 'full' , redirectTo: 'todo-consulta' },
  { path: 'todo-cadastro', component: TodoCadastroComponent },
  { path: 'todo-consulta', component: TodoConsultaComponent},
  { path: 'todo-edicao/:id', component: TodoEdicaoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoCadastroComponent,
    TodoConsultaComponent,
    TodoEdicaoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
