abstract class Person {
  abstract name: string

  // constructor(name: string) {
  //   this.name = name
  // }

  display(): void {
    console.log(this.name)
  }

  // 无方法体的方法 => 抽象方法
  abstract find(name: string): Person
}

class Employee extends Person {
  name: string
  empCode: number

  constructor(name: string, code: number) {
    super()
    this.name = name
    this.empCode = code
  }

  find(name: string): Person {
    return new Employee(name, 1)
  }
}

let p: Person = new Employee('Jld', 22)
let p1: Person = p.find("love")
console.log(p1)