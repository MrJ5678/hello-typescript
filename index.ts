/*
 * @Author: hhhhhq
 * @Date: 2020-06-19 21:31:49
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-07-05 07:25:50
 * @Description: file content
 */ 

class Person {
  protected firstName: string;
  protected lastName: string;

  // 只读属性
  readonly name: string = "love"

  // 静态属性
  protected static age: number = 10

  // 静态方法
  static getStaticAge() {
    return `my age is ${Person.age}`
  }

  public constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getAge() {
    return `my age is ${Person.age}`
  }

  greet() {
    console.log('hi')
  }

  protected sayHi() {
    console.log('private sayHi(){}')
  }

  public callSayHi() {
    this.sayHi()
  }

  protected getFirstName() {
    return this.firstName
  }

  getLastName() {
    return this.lastName
  }

  setFirstName(firstName) {
    this.firstName = firstName
  }

  setLastName(lastName) {
    this.lastName = lastName
  }

  othergreet() {
    this.greet()
    console.log('***')
  }
}

// console.log(Person.age)
// console.log(Person.getStaticAge())

let aPerson = new Person("Jld", "love")
console.log(aPerson.name)
// console.log(aPerson.getAge())
// aPerson.callSayHi()
// aPerson.setFirstName('Jld')

// class Programmer extends Person {
//   greet() {
//     console.log('hello world')
//   }

//   public static getSuperAge() {
//     return `super age is ${Programmer.age}`
//   }

//   constructor(firstName: string, lastName: string) {
//     // 调用父类构造函数到方法， 要穿入参数
//     super(firstName, lastName)
//     console.log('Programmer constructor')
//   }

//   greetLikeNormalPeople() {
//     super.greet()
//   }

//   public getFullName(): string {
//     return this.getSuperFirstName() + this.getSuperLastName()
//   }

//   public getSuperFirstName() {
//     return this.getFirstName()
//   }

//   public getSuperLastName() {
//     return this.lastName
//   }
// }

// console.log(Programmer.getSuperAge())

// let aProgrammer = new Programmer("Jld", "love")
// console.log(aProgrammer.getFullName()) 

// let aProgrammer: Person = new Programmer()
// aProgrammer.greet()