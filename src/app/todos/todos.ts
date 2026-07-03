import { Component, inject, OnInit, signal} from '@angular/core';
import { catchError } from 'rxjs/operators';
import { TodosService } from '../services/todos';
import { Todo } from '../models/todo';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';

@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todoService = inject(TodosService); 
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit() {
    this.todoService.getTodosFromApi()
      .pipe(
        catchError((error) => {
          console.error('Error fetching todos:', error);
          throw error;// Return an empty array in case of error
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      }
      );
  }

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map(todo => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }

}
