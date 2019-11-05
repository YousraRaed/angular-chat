import { Component, OnInit } from '@angular/core';
import {MessagesService} from './messages.service'


@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.css']
})
export class ChatMessagesComponent implements OnInit {
  contactList: any[];
  messagesList:any[];

  constructor(public MessagesService: MessagesService) { }

  ngOnInit() {
    this.contactList=this.MessagesService.contactList;
    this.messagesList=this.MessagesService.messagesList;
  }

}
