function getAllData() {
    document.getElementById("display").style.height="500px";
    fetch("https://book-server0905.herokuapp.com/authors").then(response => response.json()).then((data) => {
            let output = ''; data.forEach(element => {    output += `
        <div class=card card-body mb-3" id="displayBox">
        <h3>${element.authorName}</h3>
        <h5>Age : ${element.authorAge}</h5>
        <h5>Gender : ${element.authorGender}</h5>
        <h5>Awards : ${element.authorAwards}</h5>
        </div>`; });        document.getElementById("display").innerHTML = output;    }) }

function getUser() { const user = document.getElementById("search").value;    if (user == "") {   alert("invalid Value")   }
    else {fetch(`https://book-server0905.herokuapp.com/authors/${user}`).then(response => response.json()).then((data) => {
                let output = ''; output += `
        <div class=card card-body mb-3" id="displayBox">
        <h3>${data.authorName}</h3>
        <h5>AGE : ${data.authorAge}</h5>
        <h5>GENDER : ${data.authorGender}</h5>
        <h5>AWARDS : ${data.authorAwards}</h5>
        `; document.getElementById("display").innerHTML = output;  });    }   }

function postData() {
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let gender = document.getElementById('gender').value
    let awards = document.getElementById('Awards').value
    console.log(name, age, gender, awards)
    fetch("https://book-server0905.herokuapp.com/authors", { method: "POST",  body: JSON.stringify({
            authorName: name,authorAge: age, authorGender: gender,  authorAwards: awards
        }), headers: {    "Content-type": 'application/json'     }
    }).then(response => response.json())  .then(json => console.log(json));   window.location.reload()
}

function UpdateData() {
    let name2 = document.getElementById('nameUpdate').value
    let awards2 = document.getElementById('AwardsUpdate').value
    console.log(name2, awards2)
    fetch(`https://book-server0905.herokuapp.com/authors/${name2}`, {method: "PATCH", body: JSON.stringify({  authorAwards: awards2  }),  
    headers: {    "Content-type": "application/json"   }   })
        .then(response => response.json()).then(json => console.log(json));    window.location.reload()
}
function Clear() {
    document.getElementById("display").innerHTML = "";
    document.getElementById("display").style.height="0px";
}
