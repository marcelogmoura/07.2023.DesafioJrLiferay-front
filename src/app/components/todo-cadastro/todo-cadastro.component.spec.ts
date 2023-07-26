import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCadastroComponent } from './todo-cadastro.component';

describe('TodoCadastroComponent', () => {
  let component: TodoCadastroComponent;
  let fixture: ComponentFixture<TodoCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoCadastroComponent]
    });
    fixture = TestBed.createComponent(TodoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
