import { Component, OnInit, Output, EventEmitter,HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { GlobalsService } from '../../services/globals.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	authenticated: boolean = false;
	active: boolean = false; // hamburger variable
	openAside: boolean = false; // aside variables:
	mobileSearchActivated: boolean = false;
	
	constructor(
		public g: GlobalsService
	) {

	}

	ngOnInit() {
		console.log(this.g.getChatlistState());
		console.log(screen.width)
		this.headerConfig(screen.width);
		this.g.chatlistOpened = (screen.width>450); // 
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.headerConfig(event.target.innerWidth);
	} 

	headerConfig(windowWidth){

		this.mobileSearchActivated = windowWidth<=450 ? true : false;
		
	}


	toggleChatList(){
		this.g.chatlistOpened =! this.g.chatlistOpened;
	}

	childrenEvents(task){
		switch (task) {
			case "closeAside":
				this.active = false;
				this.openAside = false;
				// code...
				break;
			
			default:
				// code...
				break;
		}
	}

	
}
