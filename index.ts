let w = 2
let h = 4
class Rectangle {
  private w: number
  private h: number

  constructor(w: number, h: number) {
    this.w = w
    this.h = h  
  }

  getAreaFunction() {
    return (): number => {
      // this.w = 2
      // this.h = 4
      return this.w * this.h
    }
  }
}

let rectangle = new Rectangle(10, 10)
let areaFunction = rectangle.getAreaFunction()
let area = areaFunction()

console.log(area)