var w = 2;
var h = 4;
var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this.w = w;
        this.h = h;
    }
    Rectangle.prototype.getAreaFunction = function () {
        var _this = this;
        return function () {
            // this.w = 2
            // this.h = 4
            return _this.w * _this.h;
        };
    };
    return Rectangle;
}());
var rectangle = new Rectangle(10, 10);
var areaFunction = rectangle.getAreaFunction();
var area = areaFunction();
console.log(area);
