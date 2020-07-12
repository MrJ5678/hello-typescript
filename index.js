var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    // 读取name
    Person.prototype.getName = function () {
        return this._name;
    };
    // 设置
    Person.prototype.setName = function (name) {
        this._name = name;
    };
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p = new Person("Jld", 22);
// 输出name
console.log(p.name);
// 修改name
p.name = "loved";
console.log(p);
