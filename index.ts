// 1
let a: any
a = function(): void {
  console.log('It work')
}

function func(): any {
  return function(): void {
    console.log('It work')
  }
}

// 2
let c: Function

c = function(): void {
  console.log('It work')
}

// 3
let d: (para: string) => string
d = function(params: string): string {
  return params
}

// 4
type e = (para: string) => string
const f: e = function(params: string): string {
  return params
}

// 5
interface g {
  (para: string): string
}

const h: g = (pass: string): string => pass