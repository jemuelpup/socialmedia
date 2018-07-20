import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

	@Output() public chatAreaEvents = new EventEmitter();

  title: string = 'app';
  chats: any;

  constructor(){
  }


 
}
