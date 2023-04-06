// // normal method to create a async function

// async function test(){
//     return "kaushik"
// }
// test().then((response)=>{
//     console.log(response);
// });


// //arrow function method to create a async function

// let sum = async()=>{
//     return 10 + sdf1e0;
// };
// sum().then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(new Error("something went wrong"));
// });

// // await function

// let a = async()=>{          // do operations in sequence
//     console.log("2 : two");
//     console.log("3 : three");
//     console.log("4 : four");
// };

// console.log("1 : one");
// a();
// console.log("5 : five");


// let b = async()=>{          
//     console.log("await 2 : two");
//     const response =await fetch('https://jsonplaceholder.typicode.com/users')  // await make the statement/function,keeps on waiting untill other things get execut after the function call
//     console.log("await 3 : three");
//     const userdata = await response.json();

//     return console.log(userdata);

// };

// console.log("await 1 : one");
// let c = b();                    //function call
// console.log("await 4 : four");
// console.log(c);

let test = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userdata = await response.json();
    return userdata;
};
test().then((data) => {
    console.log(aadata);            //aadata is not defined , throws a custom error in console
}).catch((error) => {
    throw new Error("failed to fetch the data from json file");
});

//this will fetch the data correctly(optimized code)
let test2 = async () => (await fetch('https://jsonplaceholder.typicode.com/users')).json();

test2().then((data) => { console.log(data) })
    .catch((error) => { console.log(error) });


//error handling:-

let abc = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const userdata = await response.json();
        return userdata;
    } catch (error) {
        console.log(error);
    }
};
abc().then((data) => {
    console.log(aadata);            //aadata is not defined , throws a custom error in console
});

//with json data input method
try {
    let json = '{"name":"kaushik","age":20,"ID":1234567890}';
    let user = JSON.parse(json);
    console.log(user.name,user.age,user.ID);
} catch (error) {
    console.log(error);
}