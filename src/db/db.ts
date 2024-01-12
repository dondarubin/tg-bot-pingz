import {IDatabase, IDBUser} from "./IDatabase";
import postgres from "postgres";
import {IEnvironmentService} from "../config/config.environment";

export class PG implements IDatabase {
  private readonly db: postgres.Sql;

  constructor(private readonly configService: IEnvironmentService) {
    this.db = postgres({
      port: Number(this.configService.get("PG_PORT")),
      username: this.configService.get(("PG_USERNAME")),
      password: this.configService.get(("PG_PASSWORD"))
    })
  }

  public async createNewUser(user: IDBUser) {
    await this.db`
        INSERT INTO Users (tg_id,
                           user_name,
                           user_surname,
                           user_age,
                           user_gender,
                           user_social_networks,
                           user_city)
        values (${user.tgId},
                ${user.name},
                ${user.surname},
                ${user.age},
                ${user.gender ? "М" : "Ж"},
                ${user.social_networks ? user.social_networks : null},
                ${user.city})`
  }
}