import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChatBotComponent } from './chat-bot.component';
import { ChatBotService } from './services/chatbot.service';


@NgModule({
  declarations: [ChatBotComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [ChatBotComponent],
  providers: [ChatBotService]
})

export class ChatBotModule { }
