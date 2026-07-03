import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodosService } from '../../services/todos';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  providers: [TodosService]
})
export class Header {
  title = signal('apka-testowa');
  param = signal('test-param');
}
