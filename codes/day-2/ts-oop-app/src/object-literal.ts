//1. Object Literal syntax
let anilPerson = {
    name: "anil",
    id: 100,
    salary: 1000,
    print: function () {
        return (`Name: ${this.name}, ID: ${this.id}, Salary: ${this.salary}`);
    }
}
//TS does not allow to add properties to an object after it has been created
// anilPerson.location = "Bangalore";
// anilPerson.sayHello = function () {
//     return `Hello ${this.name}`;
// };
console.log(anilPerson);
//console.log(anilPerson.sayHello());
// console.log(anilPerson.name);
// console.log(anilPerson['id'])
// console.log(anilPerson.print());