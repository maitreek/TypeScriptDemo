var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.fullName = name;
    }
    Person.prototype.getFullName = function () {
        return this.fullName;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(empName, dept) {
        var _this = _super.call(this, empName) || this;
        _this.departmentInfo = dept;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee('Max', 'IT Services');
console.log(emp.getFullName());
console.log(emp.departmentInfo);
