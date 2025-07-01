class Person {
    // id: number;
    // public name: string;
    // salary: number;

    // constructor(name: string, id: number, salary: number) {
    //     this.name = name;
    //     this.id = id;
    //     this.salary = salary;
    // }
    constructor(public name: string, public id: number, public salary: number) {

    }
    print(): string {
        return `Name: ${this.name}, ID: ${this.id}, Salary: ${this.salary}`;
    }
}
class Trainer extends Person {
    // subject: string;

    // constructor(name: string, id: number, salary: number, subject: string) {
    //     super(name, id, salary);
    //     this.subject = subject;
    // }
    constructor(name: string, id: number, salary: number, private subject: string) {
        super(name, id, salary);
    }
    get Subject(): string {
        return this.subject;
    }
    set Subject(value: string) {
        this.subject = value;
    }
    print(): string {
        return `${super.print()}, Subject: ${this.subject}`;
    }
}   