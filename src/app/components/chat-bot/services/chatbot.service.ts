import { Injectable } from '@angular/core';
import { ChatMessage } from '../model/chat-message.model';
import {botMessages} from '../model/chat-message.model';

@Injectable()
export class ChatBotService {

  private chatMessages: ChatMessage[];
  private prevBotMsgId: number;
  constructor() {
    this.chatMessages = [];
    this.prevBotMsgId = 0;
  }

  addMessage(messageText: string): ChatMessage {
    const dt = new Date();
    const chatMessage = {} as ChatMessage;
    chatMessage.messageId =  this.chatMessages.length;
    chatMessage.messageText  = messageText;
    chatMessage.isUser = true;
    chatMessage.dateTime = `${dt.toLocaleDateString()} ${dt.toLocaleTimeString()}`;
    this.chatMessages.push(chatMessage);
    return chatMessage;
  }

  getNextBotMesssage(): ChatMessage {
    const botMsg = botMessages[this.prevBotMsgId];
    if (this.prevBotMsgId < (botMessages.length - 1)) {
      this.prevBotMsgId += 1;
    }
    return botMsg;
  }
}
