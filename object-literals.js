let fname = "kaushik";
let lname = "dolui";
let course = "bca";

var obj = {  // if variable name and object key name is same then this method can be use, instead of typing the key value pairs again and again
    fname,
    lname,
    course
}
console.log(obj);


let n = "name"
var obj1 = {        // here we can use variable value as an key name by using a square brackets,just like => [variable name]
    [n] : "kaushik",
    age : 20
}

console.log(obj1);
console.log(obj1.name);  // we can directly access the value by the variable name

var obj2 = {
    ["f" + n] : "kaushik",      // we can also make chnage sto the key name by this method
    ["l" + n] : "dolui",
    course : "bca",
    details() {         // here we dont need to write a function in an object as a key value pair , we can directly write it as a function
       return `Hey ${this.fname}${this.lname} your course is ${course}`;  // easily accessible with the variable name
    },
    'show details'(){      // if want to use a name which conatins space in it we can write it inside a single qoutes like this 
        return `Hey ${this.fname}${this.lname} your course is ${course}`;
    }
}

console.log(obj2);
console.log(obj2.details());
console.log(obj2['details']());  // new method to call a function which is declared under an object
console.log(obj2['show details']());