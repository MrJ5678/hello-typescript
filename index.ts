// class Person {
//   private _name: string
//   private _age: number

//   constructor(name: string, age: number) {
//     this._name = name
//     this._age = age
//   }
// }

// let p: Person = new Person("Jld", 30)
// console.log(p)

class Person {
  constructor(private _name: string, private _age: number) {
    
  }
}

let p: Person = new Person("Jld", 30)
console.log(p)