console.log("Hello world!")
fetch("https://jsonplaceholder.typicode.com/posts", {
        "method": "post",
        "body": JSON.stringify({
            "userID": 42,
            "title": "Publicação teste",
            "body": "lorem impsum dolor sit amet",
        }),
        "headers": {
            "Content-type": "application/json",
        }
    })
    .then((resp) => resp.json())
    .then((jsonobject) => console.log(jsonobject));