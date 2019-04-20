import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  input1: number; 
  input2: number;
  errorMessage: string;
  presentDate: Date;

  constructor() {
    this.presentDate = new Date();
    this.input1 = this.presentDate.getHours();
    this.input2 = this.presentDate.getMinutes();
  }
  testTime(){
    console.log(`Hour = ${this.input1}, and Minutes = ${this.input2}` );

    const userPick = new Date(); 
    this.errorMessage = ''

    if ( userPick > this.presentDate ) {
      this.errorMessage = 'This is a future time dude!'
    }
    if (userPick.getHours() > this.input1){
      this.errorMessage = "Wrong Hours dude!"
    }
    if (userPick.getMinutes() > this.input2){
      this.errorMessage = "Wrong Minutes dude!"
    }
  }
}
