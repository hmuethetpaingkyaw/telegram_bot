const TelegramBot = require('node-telegram-bot-api');

const token = '6242511115:AAFhLEnM0Ym_TLv8BFhYqSHGK2bxRf5_ptw';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    console.log(msg);
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'I love my gf');
  });