/*fetch("fetch.txt")
.then((response)=>response.text())
.then((data)=>document.write(data))

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.text())
.then((data)=>console.log(data))
.catch((error)=>console.log("something went wrong"));

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data)=>{
    for (let x in data) {
        let a = `ID: ${data[x].id} <br> Name: ${data[x].name} <br> Username: ${data[x].username}<br> Address: ${data[x].address.city} <br>`
        document.write(a);
    }
})
.catch((error)=>console.log("something went wrong"));


// inserting data in the server in json format
let obj = {
    title : 'aaaa',
    body : 'bbbb',
    userID : 1
}
fetch("https://jsonplaceholder.typicode.com/users",{
    method:'post',
    body: JSON.stringify(obj),
    headers : {
        'content-type':'application/json'
    },
})
.then((response)=>response.json())
.then((json)=>console.log(json));*/

document.getElementById("saveform").addEventListener("click",function(e){
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts",{
    method:'post',
    body: new FormData(document.getElementById("myform")),
    headers : {
        'content-type':'application/x-www-form-urlencoded'
    },
})
.then((response)=>response.json())
.then((json)=>console.log(json));

})
