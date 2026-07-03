import { Component, inject, OnInit, input, output} from '@angular/core';
import { TodosService } from '../../services/todos';
import { Todo } from '../../models/todo';
import {HighlightCompletedTodo } from '../../directives/highlight-completed-todo';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodo, UpperCasePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem{
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked() {
    this.todoToggled.emit(this.todo());
  }
}
