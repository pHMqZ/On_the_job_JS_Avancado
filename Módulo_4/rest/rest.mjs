let baseUrl = 'https://jsonplaceholder.typicode.com/'

const apiCall = (endpoint, method, data) => {
    let uri = baseUrl + endpoint
    return fetch(uri, {
            method: method,
            headers: {
                "Content-type": "application/json"
            },
            body: data ? data : null
        })
        .then(response => response.json())
        .then(json => json)
}

apiCall("posts", "GET").then(console.log)