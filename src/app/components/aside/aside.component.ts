import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

	@Input('openAside') public openAside;
	@Output() public asideEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeAside(){
  	this.asideEvent.emit('closeAside');
  }

}
