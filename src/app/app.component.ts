import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  animal = '';
  question = '¿Te ha gustado NgGirls hasta el momento?';
  response
  //Función o método
  answer(value){
this.response = value;
  }
}