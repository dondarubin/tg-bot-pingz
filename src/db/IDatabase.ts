export interface IDBUser {
  tgId: number
  name: string
  surname: string
  age: number
  gender: boolean
}

export interface IDatabase {
  createNewUser(user: IDBUser): Promise<void>
}