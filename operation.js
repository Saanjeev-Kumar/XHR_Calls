const Author = () => {
    data = {
        authorName: document.getElementById('pname').value.trim(),
        authorAge: document.getElementById('age').value.trim(),
        authorGender: document.getElementById('gender').value.trim(),
        authorAwards: document.getElementById('awards').value.trim()
    }
    fetch("https://book-server0905.herokuapp.com/authors", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            authorName: data.authorName,
            authorAge: data.authorAge,
            authorGender: data.authorGender,
            authorAwards: data.authorAwards
        })
    }).then(res => {
            return res.json()
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

const getAuthors = () => {
    fetch("https://book-server0905.herokuapp.com/authors", {
        method: "GET"
    }).then(res => res.json())
        .then(data => {
            
            let result = [];
            for (let i = 0; i < data.length; i++) {
                result += `
            <ul>
            <li>Author Name: ${data[i].authorName}</li>
            <li>Author Age: ${data[i].authorAge}</li>
            <li>Author Gender: ${data[i].authorGender}</li>
            <li>Author Awards: ${data[i].authorAwards}</li>
            </ul>`
            }
            document.getElementById('output').innerHTML = result;

        })
        .catch(err => console.log(err))
}

const getByAuthorName = () => {
    var name = document.getElementById('name').value.trim();
    fetch(`https://book-server0905.herokuapp.com/authors/${name}`, {
        method: "GET"
    }).then(res => res.json())
        .then(data => {
            let a = "<li>" + "Author Name: " + data.authorName + "<p>" +
                "Author Age: <p>" + data.authorAge + "<p>" +
                "Author Gender:<p>" + data.authorGender + "<p>" +
                "Author Awards:<p>" + data.authorAwards + "<p>" + "</li>"
            document.getElementById("authorByName").innerHTML = a
        })
        .catch(err => console.log(err))
}
const updateAuthor = () => {
    data = {
        authorName: document.getElementById('Authname').value.trim(),
        authorAge: document.getElementById('uAge').value.trim(),
        authorAwards: document.getElementById('uAwards').value.trim()
    }
    fetch(`https://book-server0905.herokuapp.com/authors/${data.authorName}`, {
        method: 'PATCH',
        body: JSON.stringify({
            authorAge: data.authorAge,
            authorAwards: data.authorAwards
        }),
        headers: {
            'Content-type': 'application/json; charset = UTF-8'
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
}