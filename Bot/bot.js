const { Telegraf } = require("telegraf");
const TOKEN = "7173941993:AAEwTS2bnmPirW2LHf8eHdxPrhX-vXDNeF8";
const bot = new Telegraf(TOKEN);

const web_link = "https://web-app-telegram-bot.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
