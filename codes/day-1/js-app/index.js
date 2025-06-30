function filterValues(arr, fnRef) {
    const filteredValues = []
    for (let item of arr) {
        const isTrue = fnRef(item)
        if (isTrue)
            filteredValues.push(item)
    }
    return filteredValues
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const isEven = function (num) {
    return num % 2 == 0
}
const evenNumbers = filterValues(numbers, isEven)
for (const index in evenNumbers) {
    console.log(evenNumbers[index])
}

const names = ['anil', 'sunil', 'joydip']
const containsN = function (name) {
    return name.toLocaleLowerCase().includes('n')
}
const namesWithN = filterValues(names, containsN)
for (const element of namesWithN) {
    console.log(element);
}