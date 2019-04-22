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
  userPick: Date;

  constructor() {
    this.presentDate = new Date();
    this.input1 = this.presentDate.getHours();
    this.input2 = this.presentDate.getMinutes();
    this.userPick = new Date();
  }
  testTime(){
    console.log(`Hour = ${this.input1}, and Minutes = ${this.input2}` );

    this.errorMessage = ''

    if ( this.userPick > this.presentDate ) {
      this.input1 = this.userPick.getHours();
      this.input2 = this.userPick.getMinutes();
      this.errorMessage = 'This is a future time dude!'
    }
    if ( this.userPick.getHours() > this.input1 ){
      this.errorMessage = "Past Hours dude!"
    }
    if ( this.userPick.getMinutes() > this.input2 ){
      this.errorMessage = "Past Minutes dude!"
    }
  }
}
