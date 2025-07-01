function person(name: string, id: number, salary: number) {
    let information = ''
    this.name = name;
    this.id = id;
    this.salary = salary;
    this.print = function () {
        information = "Name: " + this.name + ", ID: " + this.id + ", Salary: " + this.salary;
        return information;
    }
    //return this;
}
const anilPersonRef: any = new person('anil', 1, 1000);
console.log(anilPersonRef.name);

//person("sunil", 2, 2000);
//console.log(global);