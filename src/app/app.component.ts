import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarefas';
  upperText: string = 'Display upper text';
  lowerText: string = 'Display lower text';
  percent: number = 0.5;
  date: Date = new Date();
  isAdmin: boolean = true;
  money: number = 598;
  profile: number = 2
  user: User = {
    name: 'Joao',
    age: 25
  }
}
