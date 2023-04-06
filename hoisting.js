hii(); // function can be called from creating it. with the help of hoisting concept
function hii() {
    document.write("hey there!!!")
} 
console.log(a); // gives refernce error becuase hoisting wont work before initializing variables
let a = 100;

//hoisting is done for declaration not for the initialization.
//function expression and class expression can not be hosted.
