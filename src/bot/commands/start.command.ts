import {Command} from "./command.class";
import {Telegraf} from "telegraf";
import {IBotContext} from "../bot";
import {markupsList} from "../consts/markup.list";
import {botPhrasesList} from "../consts/botPhrases.list";

export class StartCommand extends Command {

  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.start((ctx) => {
      ctx.reply(
        botPhrasesList.start,
        markupsList.start
      )
    })

    // this.bot.action("questionnaire", (ctx) => {
    //   ctx.editMessageText(botPhrasesList.processQuestionnaire)
    //   ctx.scene.enter("questionnaire scene")
    // })
    //
    // this.bot.action("findPerson", (ctx) => {
    //   ctx.editMessageText(botPhrasesList.notAvailable)
    // })
  }
}