import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  message = signal('Hello from Home Component!');

  keyUpHandler(event: KeyboardEvent) {
    console.log('Key pressed:', `${event.key} key`);
  }
}
