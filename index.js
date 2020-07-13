// 风景画
var PrinterA = /** @class */ (function () {
    function PrinterA() {
    }
    PrinterA.prototype.printLandscape = function () {
        console.log("printing in landscape");
    };
    return PrinterA;
}());
// 肖像画
var PrinterB = /** @class */ (function () {
    function PrinterB() {
    }
    PrinterB.prototype.printPortrait = function () {
        console.log("printing in portrait");
    };
    return PrinterB;
}());
function doPrint(pt) {
    if (pt.pageOrientation === 'landscape') {
        console.log(pt.printLandscape());
    }
    else if (pt.pageOrientation === 'portrait') {
        console.log(pt.printPortrait());
    }
    else {
        var unknownPrinter = pt;
    }
}
function getEmployeeSalary(emp) {
    switch (emp.empType) {
        case "FullType":
            return emp.annualSalary;
        case "PartTime":
            return emp.monthlySalary;
        case "Contractor":
            return emp.hourlySalary;
        default:
            var temp = emp;
            return temp;
    }
}
var contractor = { empType: "Contractor", name: "Tina", hourlySalary: 34 };
var sal = getEmployeeSalary(contractor);
console.log(sal);
