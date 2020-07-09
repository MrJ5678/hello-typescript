class Component {
  private width: number
  private height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  display(): void {
    console.log('displaying')
  }
}

// 接口继承类
// 接口继承类的方法和属性, 但不实现
// 也可以定义自己的方法/属性
interface Widget extends Component {
  hide(): void
  size: number
}

class Button extends Component implements Widget {
  size: number
  hide(): void {
    console.log("hiding")
  }
}

let w: Widget = new Button(1, 2)

console.log(w)
w.display()
w.hide()