function getAuthors() {
  fetch("https://frozen-brook-09618.herokuapp.com/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => appendData(data))
    // .then((data)=>console.log(data))

    .catch((err) => console.log(err));
    function appendData(data){
        var mainContainer = document.getElementById("myData");
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = 'Name: ' + data[i].authorName + ' ' + "       Age: "+data[i].authorAge+"Gender:"+ ' '+data[i].authorGender+"Awards: "+" "+data[i].authorAwards;
            mainContainer.appendChild(div);
    }

}
}
function getbyName() {
    let inputValue=this.

    fetch("https://frozen-brook-09618.herokuapp.com/users/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => appendData(data))
      // .then((data)=>console.log(data))
  
      .catch((err) => console.log(err));
      function appendData(data){
          var mainContainer = document.getElementById("myData");
          for (var i = 0; i < data.length; i++) {
              var div = document.createElement("div");
              div.innerHTML = 'Name: ' + data[i].authorName + ' ' + "       Age: "+data[i].authorAge+"Gender:"+ ' '+data[i].authorGender+"Awards: "+" "+data[i].authorAwards;
              mainContainer.appendChild(div);
      }
  
  }
  }


  const postAuthor = () => {
    data = {
    authorName: document.getElementById('name').value.trim() ,
    authorAge: document.getElementById( 'age') . value. trim(),
    authorGender : document.getElementById( 'gender ' ) . value. trim() ,
    authorAwards : document.getElementById( ' awards ' ) . value.trim()
    }
    Fetch("https://book-server0905.herokuapp.com/authors", {
    method: "POST",
    headers : {
    "Content-Type": 'application/json'
    },
    body : JSON.stringify({
    authorName: data . authorName,
    authorAge: data . authorAge,
    authorGender : data . authorGender ,
    authorAwards : data . authorAwards
    })
}).then (res =>{
    return res . json ()
    })
    .then(data => console. log(data))
    .catch (err=> console. log(err))
} 

