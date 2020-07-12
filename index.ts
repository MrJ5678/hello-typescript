class Person {
  private _name: string
  private _age: number

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  // 读取name
  getName(): string {
    return this._name
  }

  // 设置
  setName(name: string): void {
    this._name = name
  }

  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }
}

let p: Person = new Person("Jld", 22)
// 输出name
console.log(p.name)

// 修改name
p.name = "loved"
console.log(p)