// // 泛型class

// class List<T> {
//   private data: T[]

//   constructor(elements: T[]) {
//     this.data = elements
//   }

//   add(t: T) {
//     this.data.push(t)
//   }

//   remove(t: T) {
//     let index = this.data.indexOf(t)
//     if(index > -1) {
//       this.data.splice(index, 1)
//     }
//   }

//   asArray(): T[] {
//     return this.data
//   }
// }

// let numbers = new List<number>([1, 2, 3, 4, 5])
// numbers.add(6)
// numbers.remove(3)
// let numArray = numbers.asArray()

// // console.log(numArray)

// let fruits = new List<string>(["apple", "banana", "peach"])
// fruits.add("pair")
// fruits.remove("banana")
// let fruitsArr = fruits.asArray()

// // console.log(fruitsArr)

// class Pair<F, S> {
//   private _first: F
//   private _second: S

//   constructor(first: F, second: S) {
//     this._first = first
//     this._second = second
//   }

//   get first(): F {
//     return this._first
//   }

//   get second(): S {
//     return this._second
//   }
// }

// let pair = new Pair<boolean, string>(true, "Jld")
// console.log(pair.first)
// console.log(pair.second)

class Pair<F, S> {
  first: F;
  second: S;

  constructor(first: F, second: S) {
      this.first = first;
      this.second = second;
  }
}

function getFirstArray<F, S>(pairs: Pair<F, S>[]): F[] {
  let arr: F[] = [];
  for (let i = 0; i < pairs.length; i++) {
      let first: F = pairs[i].first;
      arr.push(first);
  }
  return arr;
}

let numArray: Pair<number, boolean>[] = [new Pair(1, true), new Pair(2, false)]

console.log(getFirstArray(numArray))