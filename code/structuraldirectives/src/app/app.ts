import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isShow:boolean=false;
  isAkhil:boolean=false;

  change(){
    this.isAkhil=this.isAkhil?false:true;
    if(this.isShow){
      this.isShow=false;
    }
    else{
      this.isShow=true;
    }
  }
}
