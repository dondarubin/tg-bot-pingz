import {Command} from "./command.class";
import {Telegraf} from "telegraf";
import {IBotContext} from "../bot";
import {botPhrasesList} from "../consts/botPhrases.list";

export class HelpCommand extends Command {

  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.help((ctx) => {
      ctx.reply(botPhrasesList.help)
    })
  }
}