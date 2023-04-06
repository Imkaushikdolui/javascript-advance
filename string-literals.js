let user= "kaushik dolui";
let result = "pass";
let a =`hello "${user}" you are ${result}`;   // use back tick(``)followed by a $ with {} , instead of keep concatinating by using add operation

document.write(a);

let fname = "kaushik";
let lname = "dolui";

function fullname(fname,lname) {
    return `${fname}${lname}`
}
document.write(`\nhello ${fullname(fname,lname)}`);