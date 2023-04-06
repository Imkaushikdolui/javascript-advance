let arr = ["kaushik",20,"bangalore"];

let [name ,age ,city ] = arr

console.log(name);      //we can directly access it now by new key name , we dont need array. function
console.log(age);
console.log(city);

let user = ["kaushik","dolui",21,"kolkata",["male","bca"]];

let [fname,lname,yrs,native,[gender,course]] = user;   // same can be used in nested array.

console.log(fname);
console.log(lname);
console.log(yrs);
console.log(native);
console.log(gender);
console.log(course);

//instead of writting all the value name we can also use the ...args(spread method)

let [...args] = user;
console.log(...args);

function user1() {
    return ["kaushik dolui",21,"kolkata"];
}

let [name1,age1=20,city1] = user1();    // we can make chnages also by this method
console.log(city1);




