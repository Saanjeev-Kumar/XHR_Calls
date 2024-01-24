const get=()=>{
  fetch("https://book-server0905.herokuapp.com/authors",{
      method:"GET",
}).then(r=>r.json())
    .then(d=>{
        console.log(d);
   let res=[];
   for(let i=0;i<d.length;i++)
   {
       res+=`<ul><li>Author Name: ${d[i].authorName}</li>
       </ul>`
   }
   document.getElementById("output").innerHTML=res;

})
}
