import {Command} from "./command.class";
import {Markup, Telegraf} from "telegraf";
import {IBotContext} from "../bot";
import {botPhrasesList} from "../consts/botPhrases.list";

export class MessageCommand extends Command {

  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.on("message", (ctx) => {
      // @ts-ignore
      if (ctx.message.via_bot){
        return ctx.telegram.sendMessage(ctx.message.chat.id, "Спасибо за регистрацию!")
      }
      return ctx.telegram.sendMessage(ctx.message.chat.id, botPhrasesList.anyMessage)
    })
  }
}