// function filterValues(arr: number[], fnRef: fnType): number[] {
function filterValues<T>(arr: T[], fnRef: fnType<T>): T[] {
    const filteredValues: T[] = []
    for (let item of arr) {
        const isTrue: boolean = fnRef(item)
        if (isTrue)
            filteredValues.push(item)
    }
    return filteredValues
}
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// type fnType = (x: number) => boolean;
type fnType<T> = (x: T) => boolean;

// const isEven: fnType = function (num: number) {
//     return num % 2 == 0
// }
// const isEven: fnType<number> = function (num: number) {
//     return num % 2 == 0
// }
const isEven: fnType<number> = (num: number) => num % 2 == 0

const evenNumbers: number[] = filterValues<number>(numbers, isEven)
for (const index in evenNumbers) {
    console.log(evenNumbers[index])
}
/*
const names = ['anil', 'sunil', 'joydip']
const containsN = function (name) {
    return name.toLocaleLowerCase().includes('n')
}
const namesWithN = filterValues(names, containsN)
for (const element of namesWithN) {
    console.log(element);
}
*/
console.log('hello world ');