import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { Header } from './header/header';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterOutlet,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
      firsttext:string=''
      secondtext:string=''
      text1:string=''
      text2:string=''

      generate(){
        this.text1=this.firsttext
        this.text2=this.secondtext
     }
}
