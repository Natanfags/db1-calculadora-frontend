import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeroUm: number = 2;
  numeroDois: number = 10;
  operacao: string = 'SOMA';

  title = 'calculadora-frontend';
}
