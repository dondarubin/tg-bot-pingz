import {Row, RowList} from "postgres";

export interface IDBUser {
  tgId: number
  name: string
  surname: string
  age: number
  gender: boolean,
  social_networks?: string
  city: string
  profession: string,
  experience: string,
  description: string,
  useful: string,
  meeting_preferences?: string
  listInterests: string[]
}

export interface IDatabase {
  createNewUser(user: IDBUser): Promise<void>
  addUserInterests(user: IDBUser): Promise<void>
}