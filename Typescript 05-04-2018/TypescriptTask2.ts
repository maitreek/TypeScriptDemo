class BirthDay {
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

    public setDate(date): void {
        this.date = date;
    }

    public setMonth(month): void {
        this.month = month;
    }

    public setYear(year): void {
        this.year = year;
    }

}

class Teacher extends BirthDay {
    private name: string;
    private num: number;
    private gender: string;

    constructor(number: number, name: string, gender: string, year: number, month: number, day: number) {
        super(day, month, year);
        this.gender = gender;
        this.num = number;
        this.name = name;
    }

    /**
     * getName
     */
    public getName(): string {
        return this.name;
    }

    public getNum(): number {
        return this.num;
    }

    public getGender(): string {
        return this.gender;
    }
}

class Professor extends Teacher {
    /**
     * modifyBirthdate
     */
    public modifyBirthdate(name, techerNum, gender, oldYear, oldMonth, oldDate, newYear, newMonth, newDate): void {
        this.setYear(newYear);
        this.setMonth(newMonth);
        this.setDate(newDate);
    }
}

var prof = new Professor(2001, 'Huang', 'm', 1970, 1, 1);

console.log('num:' + prof.getNum() + ' name:' + prof.getName() + ' gender:' + prof.getGender() + ' birthday:' + prof.getYear() + '/' + prof.getMonth() + '/' + prof.getDate());

prof.modifyBirthdate(2001, 'Huang', 'm', 1970, 1, 1, 1994, 5, 26);
console.log('Birth Date has been changed to: ' + prof.getYear() + '/' + prof.getMonth() + '/' + prof.getDate());

