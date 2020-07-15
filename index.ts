class A {
  x: number = 5
  c: string
}

let y: keyof A
y = "c"

class Test {
  x: number = 6
}

function getProp(a: keyof Test, test: Test): any {
  return test[a]
}

let t: Test = new Test()
let prop = getProp('x', t)
console.log(prop)

class B {
  y: keyof A
}

let b: B = new B()
b.y = "x"