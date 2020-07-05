// type Name = string

// let my_name: Name = "Jld"

type User = {
  name: string,
  age: number,
  print(): void
}

const user: User = {
  name: "Jld",
  age: 29,
  print() {}
}

interface IUser {
  name: string
  age: number
}

interface IUser {
  email: string
}

const other_user: IUser = {
  name: "Jld",
  age: 29,
  email: "Mr.J@tom.com"
}