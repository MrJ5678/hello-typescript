// 1
var a;
a = function () {
    console.log('It work');
};
function func() {
    return function () {
        console.log('It work');
    };
}
// 2
var c;
c = function () {
    console.log('It work');
};
// 3
var d;
d = function (params) {
    return params;
};
var f = function (params) {
    return params;
};
var h = function (pass) { return pass; };
