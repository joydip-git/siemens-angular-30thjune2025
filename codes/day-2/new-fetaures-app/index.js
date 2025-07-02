const obj = {
    id: 1,
    name: 'John Doe',
    age: 30,
    friendds: ['']
}
// const copy = {}
// for (let propName in obj) {
//     //console.log(`${propName}: ${obj[propName]}`);
//     copy[propName] = obj[propName];
// }

const copy = { ...obj, friendds: [...obj.friendds] }
console.log(obj);
console.log(copy);

const numbers = [1, 2, 3, 4]
const copyNumbers = [...numbers];
console.log(numbers);

function calculateAvg(name, ...marks) {
    sum = 0
    for (const element of marks) {
        sum += element
    }
    return sum / marks.length;
}
console.log(calculateAvg('John Doe', 10, 20, 30));
console.log(calculateAvg('John Doe', 10, 20, 30, 40, 50));