import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { FirebaseService } from '../../services/firebase-service.service';
import { ChatData } from '../../models/chatdata';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  @Input ('chatData') public chatData;
  @Output ('closeChatBoxEvent') public closeChatBoxEvent = new EventEmitter();

   // chat data
  userID: string = "Me";
  username: string;
  friends: string[];
  msg: string = "";
  conversation:Observable<any[]>;
  destination: string;

  // chat container
  minimizeChat = false;

  constructor(
    public firebase: FirebaseService,
    private chatService: ChatService
  ) {
  }

  ngOnInit() {
    this.getConversation(this.chatData.name);
    this.destination = this.chatData.name;// change this
    console.log(this.chatData);
  }

   // angular fire functions
  getConversation(conversationName: string){
    this.conversation = this.chatService.getConversation(conversationName);
  }

  sendMessage(destination: string, msg: string){
    // developement testing
    if(this.chatData.adminSender=="jemuel"){
      this.userID = "Jemuel";
    }
    //development
    if(this.msg != ''){
      this.chatService.sendMessage(this.userID,destination,msg);
      this.msg = '';
    }
    else{
      console.log("type something first");  
    }
  }
  minimizeChatbox(){
    console.log("minimize");
  }
  closeChatBoxTrigger(){
    console.log(this.chatData);
    this.closeChatBoxEvent.emit("hahaha");
    console.log("Close the chatbox")
  }
  debug(){}
}
