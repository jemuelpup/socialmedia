import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-member',
  templateUrl: './chat-member.component.html',
  styleUrls: ['./chat-member.component.scss']
})
export class ChatMemberComponent implements OnInit {

	@Input('chatMemberData') public chatMemberData;

	test: string;
	unreadMessages: number;

  constructor(
  	private chat: ChatService
  ) { }

  ngOnInit() {
  	this.unreadMessages = 0;
  	console.log(this.chatMemberData.name);
  	this.listenToChanges();
  }
  listenToChanges(){
  	this.chat.observeChanges(this.chatMemberData.name).subscribe(res=>{
  		/* check if there is unread data in the array
			if it has, add it to the unread
  		*/
  		this.checkUnreadMessages();
  		
  		console.log(res);
  	});
  }
  // check the unread messages here...
  checkUnreadMessages(){
  	// create a loop here for unread messages.
  	// while(messages){
	  	// if (messages.unread) {
	  	// 	this.unreadMessages+=1;
	  	// }
  	// }
  }




}
