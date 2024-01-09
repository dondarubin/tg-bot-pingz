import {Telegraf} from "telegraf";
import {IBotContext} from "../bot";

export abstract class Command {
  protected constructor(public bot: Telegraf<IBotContext>) {
  }

  abstract handle(): void
}