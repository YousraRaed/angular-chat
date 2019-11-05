import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../chat-messages/messages.service'



@Component({
  selector: 'app-chat-with',
  templateUrl: './chat-with.component.html',
  styleUrls: ['./chat-with.component.css']
})
export class ChatWithComponent implements OnInit {
  contactList: any[];

  constructor(public MessagesService: MessagesService) { }

  ngOnInit() {   
     this.contactList=this.MessagesService.contactList;

  }
  

}
