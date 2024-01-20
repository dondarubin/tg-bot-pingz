import {Bot} from "./bot/bot";
import {EnvironmentService} from "./config/config.environment";
import {PG} from "./db/db";
import express from 'express';
import cors from 'cors';
import {IDBUser} from "./db/IDatabase";

const app = express()
app.use(express.json())
app.use(cors())

export const configService = new EnvironmentService();

export const db = new PG(configService);

const bot = new Bot(configService)

app.listen(configService.get("EXPRESS_PORT"), () =>
  console.log(`Express started to ${configService.get("EXPRESS_PORT")}`)
)

app.post('/web-data', async (req, res) => {
  const userData: IDBUser = req.body
  console.log(userData)

  db.createNewUser(userData)
  .then(() => {
    console.log("Пользователь создан!")
    return res.status(200).json({})
  })
  .catch((err) => {
    console.log(`Ошибка при создании пользователя: ${err}`)
    return res.status(500).json({})
  })

  db.addUserInterests(userData).then(() => {
    console.log("Интерес добавлен!")
    return res.status(200).json({})
  })
  .catch((err) => {
    console.log(`Ошибка при добавлении интереса: ${err}`)
    return res.status(500).json({})
  })
})

bot.init()
