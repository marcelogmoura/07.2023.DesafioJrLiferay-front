import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEdicaoComponent } from './todo-edicao.component';

describe('TodoEdicaoComponent', () => {
  let component: TodoEdicaoComponent;
  let fixture: ComponentFixture<TodoEdicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoEdicaoComponent]
    });
    fixture = TestBed.createComponent(TodoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
