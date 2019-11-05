import { MessagesList } from './../messages-list';
import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../chat-messages/messages.service';



@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  messagesList:any[];
  message:any;


  constructor(public MessagesService: MessagesService) { }

  ngOnInit() {
    this.messagesList=this.MessagesService.messagesList;
  }
/*send button  */
  addMessage(e){
   if(e){
    if(e.trim()!=""){
    this.messagesList.push({id:this.MessagesService.idMessage,time:'12:00',msg:e,type:'send'})
    console.log(this.message);
    this.message=null;
    
  }
    }
    }
}
