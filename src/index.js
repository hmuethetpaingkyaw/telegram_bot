const TelegramBot = require('node-telegram-bot-api');

const token = '5853029722:AAHZGIcOby_sjy2IlClYLx__ioe-cTVaQRs'

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
  
    console.log(msg);
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'I love my gf');
  });