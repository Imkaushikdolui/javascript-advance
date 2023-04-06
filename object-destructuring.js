let user = {
    fname : "kaushik",
    lname : "dolui",
    age : 20,
}
let {fname,lname,age} = user;       
// here from this method we can acces the object value from the variable name itself directly
// no need to use the object.variable_name method , just like this:-
console.log(fname);
console.log(lname);
console.log(age);

// not nessasary that we need to use only the variable to access the value of object we can also use the allies name to access the same, just like this:-

let {fname:fn,lname:ln,age:a} = user;  

console.log(fn);
console.log(ln);
console.log(a);
