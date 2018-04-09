class Birthdate {
    private date: number;
    private month: number;
    private year: number;

    constructor(day: number, month: number, year: number) {
        this.date = day;
        this.month = month;
        this.year = year;
    }

    public getDate(): number {
        return this.date;
    }

    public getMonth(): number {
        return this.month;
    }

    public getYear(): number {
        return this.year;
    }

    public setBirthdate(year, month, date): void {
        this.year = year;
        this.month = month;
        this.date = date;
    }

    /**
     * displayBirthDate
     */
    public displayBirthDate() {
        console.log('Birthdate is: ' + this.getYear() + '/' + this.getMonth() + '/' + this.getDate());
    }
}

class Teacher extends Birthdate {
    private name: string;
    private contact: number;
    private gender: string;

    constructor(number: number, name: string, gender: string, year: number, month: number, day: number) {
        super(day, month, year);
        this.gender = gender;
        this.contact = number;
        this.name = name;
    }

    /**
     * getName
     */
    public getName(): string {
        return this.name;
    }

    public getContact(): number {
        return this.contact;
    }

    public getGender(): string {
        return this.gender;
    }

    /**
     * displayTeacherData
     */
    public displayTeacherData() {
        console.log('Teacher\'s name is: ' + this.getName() + ', contact is: ' + this.getContact() + ', gender is: ' + this.getGender() + ', birthdate is: ' + this.getYear() + '/' + this.getMonth() + '/' + this.getDate());

    }
}

class Professor extends Teacher {
    private birthYear: number;
    private birthMonth: number;
    private birthDate: number;

    constructor(contact, name, gender, year, month, date) {
        super(contact, name, gender, year, month, date);
        this.birthYear = year;
        this.birthMonth = month;
        this.birthDate = date;
    }

    public getDate(): number {
        return this.birthDate;
    }

    public getMonth(): number {
        return this.birthMonth;
    }

    public getYear(): number {
        return this.birthYear;
    }

    /**
     * displayProfData
     */
    public displayProfData() {
        console.log('Professor\'s name is: ' + this.getName() + ', contact is: ' + this.getContact() + ', gender is: ' + this.getGender() + ', birthdate is: ' + this.getYear() + '/' + this.getMonth() + '/' + this.getDate());
    }

    /**
     * modifyBirthdate
     */
    public modifyBirthdate(name, techerNum, gender, oldYear, oldMonth, oldDate, newYear, newMonth, newDate): void {
        this.setProfBirthdate(newYear, newMonth, newDate);
    }

    public setProfBirthdate(year, month, date): void {
        this.birthYear = year;
        this.birthMonth = month;
        this.birthDate = date;
    }
}

var prof = new Professor(2001, 'Huang', 'm', 1970, 1, 1);

console.log('Contact:' + prof.getContact() + ' name:' + prof.getName() + ' gender:' + prof.getGender() + ' birthday:' + prof.getYear() + '/' + prof.getMonth() + '/' + prof.getDate());

prof.modifyBirthdate(2001, 'Huang', 'm', 1970, 1, 1, 1994, 5, 26);
console.log('Contact:' + prof.getContact() + ' name:' + prof.getName() + ' gender:' + prof.getGender() + ' birthday:' + prof.getYear() + '/' + prof.getMonth() + '/' + prof.getDate());
