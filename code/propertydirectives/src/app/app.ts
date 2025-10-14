import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgClass,NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isDark:boolean = true
  isPara:boolean=false;
  fun(){
    this.isDark=this.isDark?false:true;
    this.isPara=this.isPara?false:true;
  }
}
