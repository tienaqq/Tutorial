const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const { TOKEN, SERVER_URL } = process.env;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", (message) => {
  console.log(message.text);
  console.log(message.from.id);

  let chat_id = message.from.id;

  bot.sendMessage(chat_id, "Hello from nodejs");
});
