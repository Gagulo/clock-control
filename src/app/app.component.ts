import { Component } from '@angular/core';
import  moment from 'moment';

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
    this.userPick = this.presentDate;
  }
  testTime(){
    console.log( `Hour = ${this.input1}, and Minutes = ${this.input2}, presentDate = ${this.presentDate}, userPick = ${this.userPick}` );

    this.errorMessage = '';
    const temp = new Date();

    if ( this.userPick > temp ) {
      this.input1 = this.userPick.getHours();
      this.input2 = this.userPick.getMinutes();
      this.errorMessage = 'This is a future time dude!';
    }
    if ( temp.getHours() > this.input1 ) {
      this.errorMessage = 'Past Hours dude!';
    }
    if ( temp.getMinutes() > this.input2 ) {
      this.errorMessage = 'Past Minutes dude!';
    }
  }
}

//https://demos.telerik.com/kendo-ui/datetimepicker/rangeselection
