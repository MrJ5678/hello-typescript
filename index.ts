// 1
function foo(x: number, y: number, z: number) {
  console.log(x, y, z)
}

var args: number[] = [1, 2, 3];
// foo.apply(null, args)
(<any>foo)(...args)

// 2
function foo1(...x: number[]) {
  console.log(JSON.stringify(x))
}

foo1(...args)

// 3
function foo2(...args: number[]): void
function foo2(x: number, y: number, z: number) {
  console.log(x, y, z)
}

foo2(...args)


let [x, y, ...remaining] = [1, 2, 3, 4]
console.log(x, y, remaining)

let list = [1, 2]
list = [...list, 3, 4]
console.log(list)

const point2D = { x: 1, y: 1 }
const point3D = { ...point2D, z: 1}
console.log(point3D)
const anotherPoint3D = { x: 2, z: 4, ...point2D}
console.log(anotherPoint3D)
const yetAnotherPoint3D = { ...point2D, x: 2, z: 4}
console.log(yetAnotherPoint3D)