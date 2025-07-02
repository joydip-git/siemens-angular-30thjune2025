const divide = (a, b) => {
    const p = new Promise(
        //executor function
        (resolveFn, rejectFn) => {
            const res = a / b;
            if (res === Infinity) {
                const err = new Error("Division by zero is not allowed.");
                rejectFn(err);
            }
            // return res;
            resolveFn(res);
        }
    )
    return p;
}

const add = (a, b) => a + b

//console.log(divide(10, 2));
const divPromise = divide(10, 0);
// divPromise
//     .then(
//         (data) => { console.log(data); },
//         (err) => { console.log(err); }
//     )
// divPromise
//     .catch((err) => { console.log(err); })
divPromise
    .then((data) => { console.log(data); })
    .catch((err) => { console.log(err); });
console.log(add(10, 2));