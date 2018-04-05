class Person {
    private fullName: string;

    constructor(name: string) {
        this.fullName = name;
    }

    public getFullName(): string {
        return this.fullName;
    }
}

class Employee extends Person {
    public departmentInfo: string;

    constructor(empName: string, dept: string) {
        super(empName);
        this.departmentInfo = dept;
    }
}

var emp = new Employee('Max', 'IT Services');

console.log(emp.getFullName());
console.log(emp.departmentInfo);