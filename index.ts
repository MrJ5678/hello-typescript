
interface Person {
  // 只读 不可修改
  readonly first_name: string
  last_name?: string

  print?(): void

  [propName: string]: any
}

// let person = {
//   first_name: "Jld",
//   // last_name: "love",
//   // age: 30
// }

class Programmer implements Person {
  first_name: string
}

// const sayName = (o: Person) => {
//   console.log(o.first_name + o.last_name)
// }

const programmer: Person = new Programmer()
programmer.first_name = "Jld1"

// 类型断言
// sayName({first_name: "Jld2", last_name: "love", age: 30} as Person)
// sayName(programmer)

// sayName({first_name: "Jld2", lasdddt_name: "love", age: 30})