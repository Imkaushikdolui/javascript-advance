// rest operator can be used by writing three dots and the parameter name fro eg:- (...args)

//rest operator is used somewhere where we have multiple kind of arguments having different operations;

//rest operator must be a last parameter,cant used in starting=> gives an error

let sum = ((name,course,...args)=>{
    console.log(`name :${name} \ncourse: ${course} `);
    let sum = 0;
    for (const i in args) {
            sum += args[i];
    }
    console.log(`sum : ${sum}`);
});
sum("kaushik","bca",23,34,45,90,20); 

//spread operator
let num = [23,34,45,90,20];
sum("kaushik","b-tech",...num); // spread operator is nothing but using multiple arguments as a single parameter like three dots and parameter name (...num) 

console.log(num); // display as an array
console.log(...num); // display different numbers
console.log([...num]); // again going to display it as an array because of square barces


let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9];
let arr3 = arr1.concat(arr2); // old method of adding two arrays.
console.log(arr3);

arr3 = [...arr1, ...arr2]; // new method of adding two arrays using the spread operator method
console.log(arr3);

arr3 = [-5,-4,-3,-2,-1,0,...arr1,...arr2];  // by using the spread method we can easily do changes in array like appending before the array and after the array.
console.log(arr3);

let obj1 = {
    fname : "kaushik"
}

let obj2 = {
    lname : "dolui"
}

let obj3 = {...obj1,...obj2}  // by using the spread method objects can be concatinated as well
console.log(obj3);

obj3 = {                    // with the help of spread method object can be appended
    ...obj1,
    ...obj2,
    age : 20,
    course : "bca"
};

console.log(obj3);