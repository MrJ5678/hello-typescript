/*
 * @Author: hhhhhq
 * @Date: 2020-07-05 10:15:14
 * @LastEditors: hhhhhq
 * @LastEditTime: 2020-07-06 10:08:33
 * @Description: file content
 */ 
// 接口
interface Named {
  name: string

  // 接口中的方法没有方法体
  print(name: string): void
}

const sayName = (o: Named) => {
  o.print(o.name)
}

const person = {
  name: 'Jld',
  age: 29,
  print(name: string): void {
    console.log(name)
  }
}

sayName(person)

// class Person {
//   name: string

//   constructor(name: string) {
//     this.name = name
//   }
// }

// let aperson = new Person("Jld")

// sayName(aperson)