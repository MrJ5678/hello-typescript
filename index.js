function splitInHalf(str) {
    var checkString = function () {
        if (str === null || str === undefined) {
            str = "test";
        }
    };
    checkString();
    return str.substring(0, str.length / 2);
}
var s = splitInHalf("hello");
console.log(s);
