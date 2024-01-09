import {Bot} from "./bot/bot";
import {EnvironmentService} from "./config/config.environment";
import {PG} from "./db/db";

export const configService = new EnvironmentService();

export const db = new PG(configService);

const bot = new Bot(configService)

bot.init()
