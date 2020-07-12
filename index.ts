// 函数名相同, 参数不同
// 定义但不实现
function sum(x: number, y: number): number
function sum(x: number, y: number, z: number): number

function sum(x: number, y: number, z?: number): number {
  // console.log(typeof z)
  if(typeof z === 'undefined') {
    return x + y
  }
  return x + y + z
}

// console.log(sum(1, 2, 3))

function divide(x: number, y: number): number 
function divide(str: string, y: number): string[]

function divide(x: any, y: number): any {
  if(typeof x === 'number') {
    return x / y
  } else if( typeof x === 'string') {
    return [x.substring(0, y), x.substring(y)]
  }
}

let n: number = divide(6, 2)
console.log(n)

let s: string[] = divide('JldLove', 4)
console.log(s)

class Util {
  static divide(x: number, y: number): number 
  static divide(str: string, y: number): string[]

  static divide(x: any, y: number): any {
    if(typeof x === 'number') {
      return x / y
    } else if( typeof x === 'string') {
      return [x.substring(0, y), x.substring(y)]
    }
  }
}

// let a: Util = new Util()
// console.log(a.divide(6, 2))
// console.log(a.divide('helloworld', 5))

let c: number = Util.divide(6,2)
console.log(c)
let d: string[] = Util.divide('helloworld', 5)
console.log(d)