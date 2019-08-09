import { TestBed } from '@angular/core/testing';

import { ChatBotService } from './chatbot.service';

describe('ChatbotServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatBotService = TestBed.get(ChatBotService);
    expect(service).toBeTruthy();
  });
});
