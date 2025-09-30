import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //name:string=''
  // amount:number=0
  // value:number=0
  a:number=0
  b:number=0
  sum:number=0

  add() {
    this.sum=+this.a+ +this.b
  }
}
