export interface IDBUser {
  tgUserId: number
  name: string
  surname: string
  age: number
  gender: boolean,
  socialNetworks?: string
  city: string
  profession: string,
  experience: string,
  description: string,
  useful: string,
  meetingPreferences?: string
  listInterests: string[]
}

export interface IDatabase {
  createNewUser(user: IDBUser): Promise<void>
  addUserInterests(user: IDBUser): Promise<void>
}