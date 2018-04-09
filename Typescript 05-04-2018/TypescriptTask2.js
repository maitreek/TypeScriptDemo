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
var Birthdate = /** @class */ (function () {
    function Birthdate(day, month, year) {
        this.date = day;
        this.month = month;
        this.year = year;
    }
    Birthdate.prototype.getDate = function () {
        return this.date;
    };
    Birthdate.prototype.getMonth = function () {
        return this.month;
    };
    Birthdate.prototype.getYear = function () {
        return this.year;
    };
    Birthdate.prototype.setBirthdate = function (year, month, date) {
        this.year = year;
        this.month = month;
        this.date = date;
    };
    /**
     * displayBirthDate
     */
    Birthdate.prototype.displayBirthDate = function () {
        console.log('Birthdate is: ' + this.getYear() + '/' + this.getMonth() + '/' + this.getDate());
    };
    return Birthdate;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(number, name, gender, year, month, day) {
        var _this = _super.call(this, day, month, year) || this;
        _this.gender = gender;
        _this.contact = number;
        _this.name = name;
        return _this;
    }
    /**
     * getName
     */
    Teacher.prototype.getName = function () {
        return this.name;
    };
    Teacher.prototype.getContact = function () {
        return this.contact;
    };
    Teacher.prototype.getGender = function () {
        return this.gender;
    };
    /**
     * displayTeacherData
     */
    Teacher.prototype.displayTeacherData = function () {
        console.log('Teacher\'s name is: ' + this.getName() + ', contact is: ' + this.getContact() + ', gender is: ' + this.getGender() + ', birthdate is: ' + this.getYear() + '/' + this.getMonth() + '/' + this.getDate());
    };
    return Teacher;
}(Birthdate));
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(contact, name, gender, year, month, date) {
        var _this = _super.call(this, contact, name, gender, year, month, date) || this;
        _this.birthYear = year;
        _this.birthMonth = month;
        _this.birthDate = date;
        return _this;
    }
    Professor.prototype.getDate = function () {
        return this.birthDate;
    };
    Professor.prototype.getMonth = function () {
        return this.birthMonth;
    };
    Professor.prototype.getYear = function () {
        return this.birthYear;
    };
    /**
     * displayProfData
     */
    Professor.prototype.displayProfData = function () {
        console.log('Professor\'s name is: ' + this.getName() + ', contact is: ' + this.getContact() + ', gender is: ' + this.getGender() + ', birthdate is: ' + this.getYear() + '/' + this.getMonth() + '/' + this.getDate());
    };
    /**
     * modifyBirthdate
     */
    Professor.prototype.modifyBirthdate = function (name, techerNum, gender, oldYear, oldMonth, oldDate, newYear, newMonth, newDate) {
        this.setProfBirthdate(newYear, newMonth, newDate);
    };
    Professor.prototype.setProfBirthdate = function (year, month, date) {
        this.birthYear = year;
        this.birthMonth = month;
        this.birthDate = date;
    };
    return Professor;
}(Teacher));
var prof = new Professor(2001, 'Huang', 'm', 1970, 1, 1);
console.log('Contact:' + prof.getContact() + ' name:' + prof.getName() + ' gender:' + prof.getGender() + ' birthday:' + prof.getYear() + '/' + prof.getMonth() + '/' + prof.getDate());
prof.modifyBirthdate(2001, 'Huang', 'm', 1970, 1, 1, 1994, 5, 26);
console.log('Contact:' + prof.getContact() + ' name:' + prof.getName() + ' gender:' + prof.getGender() + ' birthday:' + prof.getYear() + '/' + prof.getMonth() + '/' + prof.getDate());
