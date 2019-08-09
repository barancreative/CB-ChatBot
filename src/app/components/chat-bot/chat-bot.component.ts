import { Component, OnInit } from '@angular/core';
import { ChatBotService } from './services/chatbot.service';
import { ChatMessage } from './model/chat-message.model';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
})
export class ChatBotComponent implements OnInit {

  public chatMessageList: ChatMessage[];
  public txtMessage: string;
  public isScroll: boolean;
  public isBotLoading = false;
  public showChatBox = false;
  constructor(private chatBotService: ChatBotService) {
    this.chatMessageList = [];
    this.txtMessage = '';
    this.isScroll = false;
  }

  ngOnInit() {
    setTimeout(() => {
      this.chatMessageList.push(this.chatBotService.getNextBotMesssage());
    }, 4000);
  }

  sendMessage() {
    if (this.txtMessage.trim() === '') {
      return;
    }
    this.chatMessageList.push(this.chatBotService.addMessage(this.txtMessage));
    this.txtMessage = '';
    const botReply = this.chatBotService.getNextBotMesssage();
    setTimeout(() => {
      this.isBotLoading = true;
    }, 1000);
    setTimeout(() => {
      this.isBotLoading = false;
      this.chatMessageList.push(botReply);
    }, 3000);
  }

  scrollHandler(event) {
    this.isScroll = true;
  }

  showChatbox() {
    this.showChatBox = true;
    this.isScroll = false;
  }

}
