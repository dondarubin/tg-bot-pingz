export interface IDBUser {
  tgId: number
  name: string
  surname: string
  age: number
  gender: boolean
  social_networks?: string
  city: string
}

export interface IDatabase {
  createNewUser(user: IDBUser): Promise<void>
}