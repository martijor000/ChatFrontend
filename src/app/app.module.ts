import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FirstService } from './services/first.service';
import { ChatListComponent } from './chatList/chatList.component';
import { ChatMessageComponent } from './chatMessage/chatMessage.component';
import { ChannelUIComponent } from './UI/channel-ui/channel-ui.component';
import { ChatUIComponent } from './UI/chat-ui/chat-ui.component';
import { UserUIComponent } from './UI/user-ui/user-ui.component';
import { AppRoutingModule } from './app-routing.module';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelMessageComponent } from './channel-message/channel-message.component';

@NgModule({
  declarations: [		
    AppComponent,
      ChatListComponent,
      ChatMessageComponent,
      ChannelUIComponent,
      ChatUIComponent,
      UserUIComponent,
      ChannelListComponent,
      ChannelMessageComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }