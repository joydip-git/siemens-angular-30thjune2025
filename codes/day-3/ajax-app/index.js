/*
function getData() {
    try {
        const req = new XMLHttpRequest()
        req.onreadystatechange = function () {
            if (req.readyState === 4 && req.status === 200) {
                const data = JSON.parse(req.responseText)
                console.log(data);
            }
        }

        req.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
        req.send()
    } catch (error) {
        throw error
    }
}
    */
async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (response.status === 200) {
            const data = await response.json()
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

//getData()
