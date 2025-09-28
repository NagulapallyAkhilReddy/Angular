import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  num:number=0;
  isEven:boolean=false;
  check(){
    if(this.num%2==0){
      this.isEven=true;
    }
    else{
      this.isEven=false;
    }
  }
}
