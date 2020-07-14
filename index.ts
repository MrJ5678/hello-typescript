
interface Person {
  // 只读 不可修改
  readonly first_name: string
  last_name: string

  // print(callback: PrintCallback): void

  // [propName: string]: any
}

// let x: any = 'hi hi'
// // <string> 是告诉编译器 此时x看作字符串
// let s = (<string>x).substring(0,3)
// console.log(s)

/* interface PrintCallback {
  // 可以看作是匿名函数
  (success: boolean): void
}

let printCallback: PrintCallback
printCallback = (suc: boolean): void => {
  console.log("callback", suc)
}

let person = {
  first_name: "Jld",
  // last_name: "love",
  age: 30,
  print(callback: PrintCallback): void {
    callback(true)
  }
}

person.print(printCallback) */

// class Programmer implements Person {
//   first_name: string
// }

const sayName = (o: Person) => {
  console.log(o.first_name + o.last_name)
}

// const programmer: Person = new Programmer()
// programmer.first_name = "Jld1"

// 类型断言
// sayName({first_name: "Jld2", last_name: "love", age: 30} as Person)
sayName({first_name: "Jld2", last_name: "love", age: 30} as Person)
// sayName(programmer)

// sayName({first_name: "Jld2", lasdddt_name: "love", age: 30})
interface Pair<F, S> {
  first: F
  second: S
}

let p: Pair<string, number> = { first: "Jld", second: 30 }
console.log(p)

interface Command<T, R> {
  id: T

  run(): R
}

let c: Command<string, number> = {
  id: Math.random().toString(36),
  run(): number {
    return 3
  }
}

console.log(c.id)
console.log(c.run())

interface ElementChecker {
  <T>(items: T[], toBeChecked: T, atIndex: number): boolean
}

function checkElementAt<T>(elements: T[], toBeChecked: T, atIndex: number): boolean {
  return elements[atIndex] === toBeChecked
}

let checker: ElementChecker = checkElementAt
let items = [1, 3, 5, 7]
let b: boolean = checker<number>(items, 5, 2)
console.log(b)