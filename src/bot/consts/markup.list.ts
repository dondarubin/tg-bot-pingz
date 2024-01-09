import {Markup} from "telegraf";
import {botPhrasesList} from "./botPhrases.list";
import {configService} from "../../app";

export const markupsList = {
  start: Markup.inlineKeyboard([
    Markup.button.webApp(botPhrasesList.questionnaire, configService.get("WEB_APP_URL")),
    Markup.button.webApp(botPhrasesList.somePage, configService.get("WEB_APP_SOME")),
  ]),
}