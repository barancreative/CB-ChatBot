export interface ChatMessage {
    messageId: number;
    messageText: string;
    isUser: boolean;
    dateTime: string;
}


export const botMessages: ChatMessage[] = [
    {messageId: 1, messageText: 'Hi!, I am Paul, Cashberry Bot', isUser: false, dateTime: new Date().toDateString()},
    {messageId: 2, messageText: 'How can I help you ?', isUser: false, dateTime: new Date().toDateString()}
];

