import { Component, OnInit, Output, EventEmitter, HostListener} from '@angular/core';
import { GlobalsService } from '../../services/globals.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  @Output() public chatMemberEvent = new EventEmitter();
	chatList: {}[];
  

  adminSender: boolean = false;

  constructor(
    public g: GlobalsService
  ) {
  	
  }

  ngOnInit() {
    console.log(this.g.getChatlistState());
    
    this.chatList = [
      {
        chatID: 1,
        name: "Jemuel Elimanco",
        email: "jemuelelimanco@gmail.com",
        active: 1
      },
      {
        chatID: 2,
        name: "Angeline Lorem",
        email: "angelinelorem@gmail.com",
        active: 0
      },
      {
        chatID: 3,
        name: "Sheena Ipsum",
        email: "sheenaipsum@gmail.com",
        active: 0
      },
      {
        chatID: 4,
        name: "joe",
        email: "joe@gmail.com",
        active: 0
      }
    ];
  }
  // window change event
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.g.chatlistOpened = event.target.innerWidth>667 ? this.g.chatlistOpened : false;
  } 

  setAdminSender(){
    this.adminSender = !this.adminSender;
  }

  getChatMember(chatMember){

    // development
    if(this.adminSender){
      console.log(chatMember)
      chatMember.adminSender = "jemuel";
    }
    else{
      chatMember.adminSender = "Me";
    }
    // development
    this.chatMemberEvent.emit(chatMember);
  }
  

}
