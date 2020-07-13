// 风景画
class PrinterA {
  pageOrientation: "landscape"
  printLandscape(): void {
    console.log("printing in landscape");
  }
}

// 肖像画
class PrinterB {
  pageOrientation: "portrait"
  printPortrait(): void {
    console.log("printing in portrait");
  }
}

function doPrint(pt: PrinterA | PrinterB): void {
  if(pt.pageOrientation === 'landscape') {
    console.log(pt.printLandscape())
  } else if(pt.pageOrientation === 'portrait') {
    console.log(pt.printPortrait())
  } else {
    let unknownPrinter: never = pt 
  }
}

// 接口
interface FullTimeEmployee {
  empType: "FullType";
  name: string;
  annualSalary: number;
}

interface PartTimeEmployee {
  empType: "PartTime";
  name: string;
  monthlySalary: number;
}

interface ContractEmployee {
  empType: "Contractor";
  name: string;
  hourlySalary: number;
}

// 类型别名
type Employee = FullTimeEmployee | PartTimeEmployee | ContractEmployee;

function getEmployeeSalary(emp: Employee): number {
  switch (emp.empType) {
    case "FullType":
      return emp.annualSalary;
    case "PartTime":
      return emp.monthlySalary;
    case "Contractor":
      return emp.hourlySalary;
    default:
      let temp: never = emp;
      return temp;
  }
}

let contractor: ContractEmployee = {empType: "Contractor", name: "Tina", hourlySalary: 34}
let sal = getEmployeeSalary(contractor);
console.log(sal);