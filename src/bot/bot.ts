import {IEnvironmentService} from "../config/config.environment";
import {Context, Scenes, session, Telegraf} from "telegraf";
import {Command} from "./commands/command.class";
import {StartCommand} from "./commands/start.command";
import {MessageCommand} from "./commands/message.comand";
import {HelpCommand} from "./commands/help.command";
import {IDBUser} from "../db/IDatabase";

export interface IWizardScene extends Scenes.WizardSessionData {
  // available ctx.scene.session.myWizardSceneProp
  myWizardSceneProp: number
}


export interface IBotContext extends Context {
  myProp?: string
  scene: Scenes.SceneContextScene<IBotContext, IWizardScene>
  wizard: Scenes.WizardContextWizard<IBotContext>
}

// interface ISession extends Scenes.WizardSession {
//   username: string;
//   age: number;
// }
//
// export interface IBotContext extends Context {
//   myContextProp?: string
//   session: ISession;
//   scene: Scenes.SceneContextScene<IBotContext, Scenes.WizardSessionData>;
//   wizard: Scenes.WizardContextWizard<IBotContext>;
// }


export class Bot {
  private readonly bot: Telegraf<IBotContext>;
  private commands: Command[] = []

  constructor(private readonly configService: IEnvironmentService) {
    this.bot = new Telegraf<IBotContext>(this.configService.get("TG_BOT_TOKEN"))
  }

  public async init() {
    const stage = new Scenes.Stage<IBotContext>();
    this.bot.use(session());
    this.bot.use(stage.middleware());

    this.commands = [
      new StartCommand(this.bot),
      new HelpCommand(this.bot),
      new MessageCommand(this.bot)
    ]

    for (const command of this.commands) {
      command.handle()
    }

    process.once('SIGINT', () => this.bot.stop('SIGINT'));
    process.once('SIGTERM', () => this.bot.stop('SIGTERM'));

    try {
      this.bot.launch().then();
      console.log('Bot started successfully ✔️')
    } catch (err: any) {
      console.log(`Bot start error ❌: \n ${err.toString()}`);
    }
  }

  public async answerWebAppQuery(queryId: string, data: Partial<IDBUser>) {
    await this.bot.telegram.answerWebAppQuery(queryId, {
      type: "article",
      id: queryId,
      title: "123",
      input_message_content: {message_text: "pizdec"}
    })
  }
}