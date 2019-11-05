import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ChatWithComponent } from './chat-with/chat-with.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { WindowActionComponent } from './window-action/window-action.component'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FilterPipe } from './contact-list/filter.pipe';
import {MessagesService} from './chat-messages/messages.service';




@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    ChatMessagesComponent,
    ChatWithComponent,
    ContactListComponent,
    WindowActionComponent,
    FilterPipe
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
    ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
