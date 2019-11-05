import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../chat-messages/messages.service'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  toggle = true;
  status = 'Enable'; 
  isShow = true;
  isDisplay =false;
  searchText = "";
  contactList: any[];

  



  constructor(public MessagesService: MessagesService) { 
 
  }


 
  
  ngOnInit() {
    this.contactList=this.MessagesService.contactList;
  }

/*display messages  */
  toggleDisplay(isShow) {
    if(isShow==="true")
    this.isShow = isShow;
    else
    this.isShow=!isShow;
  }
  messageDisplay(isDisplay) {
    if(isDisplay==="true")
    this.isDisplay = isDisplay;
    else
    this.isDisplay=!isDisplay;
  }

  
}