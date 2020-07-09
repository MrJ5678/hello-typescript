interface States {
  [state: string]: boolean
}

let s: States = {
  enabled: true,
  maximized: false
}

// console.log(s)
// console.log(s["maximized"])

interface States2 {
  [index: number]: number
}

// let s1: States2 = [true, true, false, false]

let s2: States2 = [1, 12, 12, 3]

// console.log(s1);
// console.log(s1[0])

// console.log(s2)
// console.log(s2[0])

interface States3 {
  [index: number]: boolean
  length: number
  pop(): boolean
} 

let s3: States3 = [true, true, false, false]
console.log(s3)
console.log(s3.length)