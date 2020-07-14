// let x: any = 'hi hi'
// // <string> 是告诉编译器 此时x看作字符串
// let s = (<string>x).substring(0,3)
// console.log(s)
/* interface PrintCallback {
  // 可以看作是匿名函数
  (success: boolean): void
}

let printCallback: PrintCallback
printCallback = (suc: boolean): void => {
  console.log("callback", suc)
}

let person = {
  first_name: "Jld",
  // last_name: "love",
  age: 30,
  print(callback: PrintCallback): void {
    callback(true)
  }
}

person.print(printCallback) */
// class Programmer implements Person {
//   first_name: string
// }
var sayName = function (o) {
    console.log(o.first_name + o.last_name);
};
// const programmer: Person = new Programmer()
// programmer.first_name = "Jld1"
// 类型断言
// sayName({first_name: "Jld2", last_name: "love", age: 30} as Person)
sayName({ first_name: "Jld2", last_name: "love", age: 30 });
var p = { first: "Jld", second: 30 };
console.log(p);
var c = {
    id: Math.random().toString(36),
    run: function () {
        return 3;
    }
};
console.log(c.id);
console.log(c.run());
function checkElementAt(elements, toBeChecked, atIndex) {
    return elements[atIndex] === toBeChecked;
}
var checker = checkElementAt;
var items = [1, 3, 5, 7];
var b = checker(items, 5, 2);
console.log(b);
