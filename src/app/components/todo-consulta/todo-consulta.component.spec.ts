import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoConsultaComponent } from './todo-consulta.component';

describe('TodoConsultaComponent', () => {
  let component: TodoConsultaComponent;
  let fixture: ComponentFixture<TodoConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoConsultaComponent]
    });
    fixture = TestBed.createComponent(TodoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
