import { Injectable } from '@angular/core';
import { ContactList} from '../contact-list';
import { MessagesList} from '../messages-list';



@Injectable({
  providedIn: 'root'
})
export class MessagesService {
   idMessage=1;
   selectedName=1;

   /*contact List */
  contactList = [
    new ContactList(
      1,
      "yousra",
      "http://placehold.it/45",
      "10:00AM",
      "modeso test message 1"
    ),
    new ContactList(
      2,
      "ahmed ",
      "http://placehold.it/45",
      "11:00AM",
      "modeso test message 2"
    ),
    new ContactList(
      3,
      "yousra ahmed",
      "http://placehold.it/45",
      "12:00AM",
      "hmodeso test message 3"
    ),
    new ContactList(
      4,
      "amina",
      "http://placehold.it/45",
      "1:00AM",
      "modeso test message 4"
    ),
    new ContactList(
      5,
      "malak",
      "http://placehold.it/45",
      "2:00AM",
      "modeso test message 5"
    ),
    new ContactList(
      6,
      "eman",
      "http://placehold.it/45",
      "3:00AM",
      "modeso test message 6"
    ),
    new ContactList(
      7,
      "victor",
      "http://placehold.it/45",
      "4:00AM",
      "modeso test message 7"
    ),
    new ContactList(
      8,
      "eman2",
      "http://placehold.it/45",
      "4:00AM",
      "modeso test message 8"
    ),
    new ContactList(
      9,
      "magdy",
      "http://placehold.it/45",
      "4:00AM",
      "modeso test message 9"
    ),
    new ContactList(
      10,
      "hassan",
      "http://placehold.it/45",
      "4:00AM",
      "modeso test message 10"
    ),
    new ContactList(
      11,
      "hesham",
      "http://placehold.it/45",
      "4:00AM",
      "modeso test message 11"
    )
  ];
  /* messages of each contact */
  messagesList = [
    new MessagesList(1,"9:00 AM", "modeso test message 1  ", "send"),
    new MessagesList(1,"10:00 AM", "modeso test message 1 ", "receive"),
    new MessagesList(1,"11:00 AM", "modeso test message 1 ", "send"),
    new MessagesList(1,"12:00 AM", "modeso test message 1 ", "receive"),

    new MessagesList(2,"9:05 AM", "modeso test message 2 ", "send"),
    new MessagesList(2,"10:05 AM", "modeso test message 2 ", "receive"),
    new MessagesList(2,"11:05 AM", "modeso test message 2 ", "send"),
    new MessagesList(2,"12:05 AM", "modeso test message 2 ", "receive"),

    new MessagesList(3,"9:06 AM", "modeso test message 3 ", "send"),
    new MessagesList(3,"10:06 AM", "modeso test message 3 ", "receive"),
    new MessagesList(3,"11:06 AM", "modeso test message 3 ", "send"),

    new MessagesList(4,"9:07 AM", "modeso test message 4 ", "send"),
    new MessagesList(4,"10:07 AM", "modeso test message 4", "receive"),
    new MessagesList(4,"11:07 AM", "modeso test message 4 ", "send"),

    new MessagesList(5,"9:08 AM","modeso test message 5 ","send"),
    new MessagesList(5,"10:08 AM","modeso test message 5  ","receive"),
    new MessagesList(5,"11:08 AM","modeso test message 5 ","send"),
    new MessagesList(5,"12:08 AM","modeso test message 5 ","receive"),

    new MessagesList(6,"9:10 AM", "modeso test message 6 ", "send"),
    new MessagesList(7,"9:07 AM", "modeso test message 7 ", "receive"),
    new MessagesList(8,"9:07 AM", "modeso test message 8 ", "receive"),
    new MessagesList(9,"9:07 AM", "modeso test message 9 ", "receive"),
    new MessagesList(10,"9:07 AM", "modeso test message 10 ", "receive"),
    new MessagesList(11,"9:07 AM", "modeso test message 11 ", "receive")
  ];


  constructor() { }
/* choose which contact */
  onClick(event,idMessage){
    this.idMessage=idMessage;
    console.log(event);

this.selectedName=idMessage;

   
  }
}
