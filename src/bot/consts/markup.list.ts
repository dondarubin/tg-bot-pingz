import {Markup} from "telegraf";
import {botPhrasesList} from "./botPhrases.list";
import {EnvironmentService} from "../../config/config.environment";

const configService = new EnvironmentService()

export const markupsList = {
  start: Markup.inlineKeyboard([
    Markup.button.webApp(botPhrasesList.questionnaire, configService.get("WEB_APP_URL")),
  ]),

  clear: Markup.removeKeyboard()
}