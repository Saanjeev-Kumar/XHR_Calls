$(document).ready(function(){
    $.ajax({ Type:'GET',url:'https://book-server0905.herokuapp.com/authors',success:function(data){
            console.log(data);var output = '';$.each(data,function(index,val){
                output +=`<div class="card card-body mb-3" id="displayBox">
                <h3>${val.authorName}</h3>
                <h5>AGE : ${val.authorAge}</h5>
                <h5>GENDER : ${val.authorGender}</h5>
                <h5>Awards : ${val.authorAwards}</h5>
               </div>`
            });$('#display').height(500);$('#display').html(output)    
        },
        error:function(err){console.log(err)},
        complete:function(){console.log("user data get succesfully")}
    })

    $('#getAllData').click(function(){$.ajax({Type:'GET',url:'https://book-server0905.herokuapp.com/authors',success:function(data){
                console.log(data);var output = ''; $.each(data,function(index,val){
                    output +=`<div class="card card-body mb-3" id="displayBox">
                    <h3>${val.authorName}</h3>
                    <h5>AGE : ${val.authorAge}</h5>
                    <h5>GENDER : ${val.authorGender}</h5>
                    <h5>Awards : ${val.authorAwards}</h5>
                   </div>`
                }); $('#display').height(500); $('#display').html(output)    
            },
            error:function(err){console.log(err)},
            complete:function(){console.log("user data get succesfully")}
        })})

    $('#getUser').click(function(){var name = $('#search').val();$.ajax({Type:'GET',url:`https://book-server0905.herokuapp.com/authors/${name}`,success:function(data){
                console.log(data); var output = ''
                output +=`<div class="card card-body mb-3" id="displayBox">
                    <h3>${data.authorName}</h3>
                    <h5>AGE : ${data.authorAge}</h5>
                    <h5>GENDER : ${data.authorGender}</h5>
                    <h5>Awards : ${data.authorAwards}</h5>
                   </div>`
                $('#display').height(500); $('#display').html(output)    
            },
            error:function(err){console.log(err)},
            complete:function(){console.log("user data get succesfully")}
        })   })
    $('#clear').click(function(){
        let output=''
        $('#display').html(output); $('#display').height(0)    })    
    //post
$('#postData').click(function(){var Name = $('#name').val();if(Name==""){alert("please enter Author Name");location.reload();}
    var Age =$('#age').val()
    if(Age==""){ alert("please enter Author Age");  location.reload(); }
    var Gender = $('#gender').val()
    if(Gender==""){ alert("please select Author Gender")}
    var Awards = $('#Awards').val()
    if(Awards==""){ alert("please enter Author Award count")}   
    console.log(Awards,Age,Gender,Name)
var url = 'https://book-server0905.herokuapp.com/authors';
$.ajax({url: url, type: "POST",  dataType: "json",   contentType: "application/json; charset=utf-8",
    data: JSON.stringify({authorName:Name,authorAge:Age,authorGender:Gender,authorAwards:Awards}),
    success : function(response, textStatus, jqXhr) {
        alert("Author Successfully Posted!");
        location.reload()
    },error : function(jqXHR, textStatus, errorThrown) {  
        alert("The following error occured: " + textStatus, errorThrown);
    },complete : function() {  console.log("Author Post Ran"); }
  }); })

//patch
$('#updateData').click(function(){ var Name = $('#nameUpdate').val(); var Awards = $('#AwardsUpdate').val();console.log(Awards,Name)
$.ajax({ headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    },    url : `https://book-server0905.herokuapp.com/authors/${Name}`,    type : 'PATCH', data : JSON.stringify({authorName:Name,authorAwards:Awards}),
    success : function(response, textStatus, jqXhr) {
        if(response=""){            alert("invalid Name")        }
        alert("Author Successfully Updated!");
        location.reload();    },
    error : function(jqXHR, textStatus, errorThrown) {
        alert("The following error occured: " + textStatus, errorThrown);    },
    complete : function() {       alert("Update Ran");    }    
});})
})

