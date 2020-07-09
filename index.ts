interface Person {
  name: string
}

interface Employee {
  age: number
}

// 继承另一个接口
interface Programmer extends Person {
  age: number
}

let p: Programmer = {
  age: 30,
  name: "Jld"
}

// 类不能继承多个类
// 但可以实现多个接口
class P implements Person, Employee {
  name: string
  age: number
}

let p1: P = {
  name: "Jld",
  age: 30
}

let p2: Person = p1

let p3: Employee = p1

console.log(p2, p3)