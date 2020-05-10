import { config } from "dotenv";
import { Telegraf, Markup, Extra } from "telegraf";
config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Holap"));
bot.command("tablas", ({ reply }) => {
  return reply(
    "Custom buttons keyboard",
    Markup.keyboard([
      ["🔍 Search", "😎 Popular"], 
      ["☸ Setting", "📞 Feedback"], 
      ["📢 Ads", "⭐️ Rate us", "👥 Share"], 
    ])
      .oneTime()
      .resize()
      .extra()
  );
});

bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.action("delete", ({ deleteMessage }) => deleteMessage());
bot.launch();
