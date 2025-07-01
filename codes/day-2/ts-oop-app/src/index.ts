interface IOperations {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}
class Operations implements IOperations {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }
}
type fnType = () => string;

type personType = {
    id: number,
    name: string,
    salary: number,
    print: fnType
}
type another = {
    subject: string;
} & personType;

// function call(): undefined | null | number {
//     return null; // or undefined, or a number
// }
type myType = number | null | undefined;
function call(): myType {
    return null; // or undefined, or a number
}

interface IPerson {
    id: number;
    name: string;
    salary?: number;
    print(): string;
}
interface IAnother extends IPerson {
    subject: string;
}

const somePerson: IPerson = {
    id: 1,
    name: "Anil",
    salary: 1000,
    print: function (): string {
        return `Name: ${this.name}, ID: ${this.id}, Salary: ${this.salary}`;
    }
};