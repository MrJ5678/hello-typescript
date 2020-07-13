function splitInHalf(str: string | null) {
  let checkString = function() {
    if(str === null || str === undefined) {
      str = "test"
    }
  }
  checkString()
  return str!.substring(0, str!.length / 2)
}

let s: string = splitInHalf("hello")
console.log(s)