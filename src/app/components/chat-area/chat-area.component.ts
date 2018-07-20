import { Component, OnInit, HostListener } from '@angular/core';
import { ChatData } from '../../models/chatdata';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})


export class ChatAreaComponent implements OnInit {
  
  chatsToShow: number = 0;
	activeChats: ChatData[] = [];
  activeChatsOverFlowList: ChatData[] = [];
  a: number = 0;
  chatAreaWidth: number;//rem
  showChatlist: boolean;

  constructor() { }

  ngOnInit() {
    this.configAllowedChats(screen.width);
    this.chatAreaWidth = 17;
    this.showChatlist = true;
  }
  chatEvents(task){
    switch (task) {
      case "OpenChatList":
       this.showChatlist = !this.showChatlist;
      break;
    }
  }




  // window change event
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.configAllowedChats(event.target.innerWidth);
  } 

  setChatAreaWidth(){
    this.chatAreaWidth = 17+(this.activeChats.length*18);
    this.chatAreaWidth = this.chatAreaWidth;
  }

  configAllowedChats(windowWidth): void{
    // console.log(windowWidth);

    if(windowWidth >= 1005){
      this.chatsToShow = 3;
    }
    else if(windowWidth >= 755){ // if window is less than 1005
      this.chatsToShow = 2;
      if(this.activeChats.length>this.chatsToShow){
        this.closeChatbox(this.closeChatbox(this.activeChats[0]));
      }
    }
    else if(windowWidth < 755){ // if window is less than 755
      this.chatsToShow = 1;
      if(this.activeChats.length>this.chatsToShow){
        this.closeChatbox(this.closeChatbox(this.activeChats[0]));
      }
    }
    this.setChatAreaWidth();
  }

  openChatMember(chatMember){
		if(!this.activeChats.length){ // pag walang laman,
			this.activeChats.push(chatMember); // insert
		} else if( this.activeChats.indexOf(chatMember)==-1 ){ // pag meron
			if(this.activeChats.length>=this.chatsToShow){ // pag sobra sa limit
        let overFlowChat = this.activeChats.splice(0, 1)[0]; // remove mo yung unang ipinasok
        if(this.activeChatsOverFlowList.indexOf(chatMember)!=-1)//kung yung ipapasok nasa overflow list
          this.activeChatsOverFlowList.splice(this.activeChatsOverFlowList.indexOf(chatMember), 1) // iremove mo
        if(this.activeChatsOverFlowList.indexOf(overFlowChat)==-1) // pag yung unang pinasok wala sa overflow list
          this.activeChatsOverFlowList.push(overFlowChat); // push it on overflow
      }
      this.activeChats.push(chatMember);
		}
    this.setChatAreaWidth();
  }

  closeChatbox(chatMember){
    this.activeChats.splice(this.activeChats.indexOf(chatMember), 1);
    if(this.activeChatsOverFlowList.length){
      if(this.activeChats.length==this.chatsToShow-1){
        this.activeChats.push(this.activeChatsOverFlowList.pop());
      }
    }
    this.setChatAreaWidth();
    // console.log("one chat box removed")
  }

}
