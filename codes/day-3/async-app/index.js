const divide = async (a, b) => {

    const res = a / b;
    if (res === Infinity) {
        const err = new Error("Division by zero is not allowed.");
        throw err;
    }
    return res;
}
const add = (a, b) => a + b

async function callDivide() {
    try {
        const data = await divide(10, 2)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
callDivide();
console.log(add(10, 2)); // This will log 12
