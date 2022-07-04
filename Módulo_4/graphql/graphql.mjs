let baseUrl = 'https://graphqlzero.almansi.me/api'

const apiCall = (method, query) => {
    return fetch(baseUrl, {
        "method": method,
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify({
            query: query
        })
    })
}

apiCall("post", `{
    user(id:1){
        id
        name
    }
}`).then(resp => resp.json()).then(console.log)