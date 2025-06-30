//function global(){
//console.log(x);//undefined
let x //var x
x = 10
console.log(x);//10
for (let i = 0; i < 1; i++) {
    let x //var _x
    x = 20 //_x= 20
    console.log(x);//20
}
console.log(x);//20

call()
//declaration
function call() {
    console.log('hello..');
}
call()

//callMe()
//expression
var callMe
callMe = function () {
    console.log('call me....');
}
callMe()

const y = 100
//y = 200
console.log(y);

//const numbers = new Array(1,2,3,4,5,6);
const numbers = [1, 2, 3, 4, 5, 6];
//numbers = [];
numbers.push(100, 200, 300);
console.log(numbers);

// function call() {
//     console.log('called...');
// }
// call();
//}
//global()

// console.log(global);
// console.log(object.prototype);