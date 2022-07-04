let baseUrl = 'https://jsonplaceholder.typicode.com/'

const apiCall = (endpoint, method, data) => {
    let uri = baseUrl + endpoint
    return fetch(uri, {
            method: method,
            headers: {
                "Content-type": "application/json;"
            },
            body: data ? data : null
        })
        .then(response => response.json())
        .then(json => json)
        .catch(error => error)
}

const apiGet = async(resource, id) => {
    let endpoint = id ? `${resource}/${id}` : resource
    console.log(await apiCall(endpoint, "GET"))
}

const apiPost = async(resource, data) => {
    let endpoint = resource
    console.log(await apiCall(endpoint, "POST", data))
}

const apiPut = async(resource, id, data) => {
    let endpoint = `${resource}/${id}`
    console.log(await apiCall(endpoint, "PUT", data))
}

const apiDelete = async(resource, id) => {
    let endpoint = `${resource}/${id}`
    console.log(await apiCall(endpoint, "DELETE"))
}

apiGet("posts")
apiGet("posts", 42)
apiPost("post", {
    "userID": 123,
    "title": "teste",
    "body": "Corpo teste"
})
apiPut("post", 44, {
    "userID": 123,
    "title": "teste",
    "body": "Corpo teste"
})
apiDelete("post", 44)