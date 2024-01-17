const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => { const xhr = new XMLHttpRequest(); xhr.open(method, url); xhr.responseType = 'json';  
      if (data) {    xhr.setRequestHeader('Content-Type', 'application/json');      }
        xhr.onload = () => { if (xhr.status >= 400) {   reject(xhr.response); } 
        else { resolve(xhr.response);      }     };
        xhr.onerror = () => {  reject('Something went wrong!');};
        xhr.send(JSON.stringify(data));  });
    return promise;  };
  
  const  getAllData= async () => {
    try { var responseData =  await sendHttpRequest('GET', 'https://book-server0905.herokuapp.com/authors'); let output = ''
          responseData.forEach(element => {
              output += `<div class=card card-body mb-3" id="displayBox">
                          <h3>${element.authorName}</h3>
                          <h5>Age : ${element.authorAge}</h5>
                          <h5>Gender : ${element.authorGender}</h5>
                          <h5>Awards : ${element.authorAwards}</h5>
                          </div>
                          ` });document.getElementById("display").innerHTML = output;
    } catch (error) {console.log(error)   }         };
  
  const getUser = async () => {
    try { let authorName = document.getElementById('search').value.trim()
      var responseData = await sendHttpRequest('GET', `https://book-server0905.herokuapp.com/authors/${authorName}`)
      if(responseData){  document.getElementById('errMsg').style.display = "none";  let output = ''; output += `
                      <div class=card card-body mb-3" id="displayBox">
                      <h3>${responseData.authorName}</h3>
                      <h5>AGE : ${responseData.authorAge}</h5>
                      <h5>GENDER : ${responseData.authorGender}</h5>
                      <h5>AWARDS : ${responseData.authorAwards}</h5>
                      `; document.getElementById("display").innerHTML = output;
      }else{     document.getElementById('errMsg').innerText = "Author Name Not Found"      }    } 
      catch (error) {      console.log(error)    }  }



      
  
  const postData = async () => {
    try {
      data = {
        authorName: document.getElementById('name').value.trim(),
        authorAge: document.getElementById('age').value.trim(),
        authorGender: document.getElementById('gender').value.trim(),
        authorAwards: document.getElementById('Awards').value.trim()
    }
  var postData = await sendHttpRequest('POST', 'https://book-server0905.herokuapp.com/authors', {
        authorName: data.authorName,        authorAge: data.authorAge,authorGender: data.authorGender, authorAwards: data.authorAwards  })
  if (postData != null) { document.getElementById('msg').innerText = "Successfully Posted Author"}
    } catch (error) {      console.log(error);   }   
  };
  
  const UpdtaeData = async () => {
    try {
      data = {
        authorName: document.getElementById('nameUpdate').value.trim(),
        authorAge: document.getElementById('AgeUpdate').value.trim(), 
        authorawards: document.getElementById('AwardsUpdate').value.trim() 
    }
    var updateData = await sendHttpRequest('PATCH', `https://book-server0905.herokuapp.com/authors/${data.authorName}`, {
        authorAge: data.authorAge,
        authorAwards: data.authorawards
    })
    if (updateData != null) {
      document.getElementById('updateMsg').innerText = "Successfully Updated Author"
    }
    } catch (error) {
      console.log(error);
    }
      
  }
  
  function Clear() {
      document.getElementById("display").innerHTML = "";
      document.getElementById("display").style.height="0px";
  }