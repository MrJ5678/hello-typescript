interface Person {
  name: string;

  greet(): void
}

const sayName = (o: Person) => {
  o.greet()
}
// 类实现接口
class Employee implements Person {
  public name: string

  greet(): void {
    console.log('I am employee')
  }
}

class Customer implements Person {
  public name: string
  public email: string

  greet(): void {
    console.log('I am customer')
  }
}

// let em = new Employee()
// sayName(em)
// em.greet()

// let customer = new Customer()
// customer.greet()

let customer: Person = new Customer()
let employee: Person = new Employee()

// 支付接口

interface Pay {
  post(): void
}

// 发送http请求
const do_pay = (pay: Pay) => {
  pay.post()
}

// 微信支付
class WPay implements Pay {
  // 调微信支付接口
  post(): void {
    console.log('Weixin Pay')
  }
}

class AliPay implements Pay {
  // 调支付宝支付接口
  post(): void {
    console.log('Ali Pay')
  }
}

let we_pay: Pay = new WPay()
let ali_pay: Pay = new AliPay()

// 微信支付
do_pay(we_pay)

// 支付宝支付
do_pay(ali_pay)