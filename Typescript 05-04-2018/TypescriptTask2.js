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
var BirthDay = /** @class */ (function () {
    function BirthDay(day, month, year) {
        this.date = day;
        this.month = month;
        this.year = year;
    }
    BirthDay.prototype.getDate = function () {
        return this.date;
    };
    BirthDay.prototype.getMonth = function () {
        return this.month;
    };
    BirthDay.prototype.getYear = function () {
        return this.year;
    };
    BirthDay.prototype.setDate = function (date) {
        this.date = date;
    };
    BirthDay.prototype.setMonth = function (month) {
        this.month = month;
    };
    BirthDay.prototype.setYear = function (year) {
        this.year = year;
    };
    return BirthDay;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(number, name, gender, year, month, day) {
        var _this = _super.call(this, day, month, year) || this;
        _this.gender = gender;
        _this.num = number;
        _this.name = name;
        return _this;
    }
    /**
     * getName
     */
    Teacher.prototype.getName = function () {
        return this.name;
    };
    Teacher.prototype.getNum = function () {
        return this.num;
    };
    Teacher.prototype.getGender = function () {
        return this.gender;
    };
    return Teacher;
}(BirthDay));
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * modifyBirthdate
     */
    Professor.prototype.modifyBirthdate = function (name, techerNum, gender, oldYear, oldMonth, oldDate, newYear, newMonth, newDate) {
        this.setYear(newYear);
        this.setMonth(newMonth);
        this.setDate(newDate);
    };
    return Professor;
}(Teacher));
var prof = new Professor(2001, 'Huang', 'm', 1970, 1, 1);
console.log('num:' + prof.getNum() + ' name:' + prof.getName() + ' gender:' + prof.getGender() + ' birthday:' + prof.getYear() + '/' + prof.getMonth() + '/' + prof.getDate());
prof.modifyBirthdate(2001, 'Huang', 'm', 1970, 1, 1, 1994, 5, 26);
console.log('Birth Date has been changed to: ' + prof.getYear() + '/' + prof.getMonth() + '/' + prof.getDate());
