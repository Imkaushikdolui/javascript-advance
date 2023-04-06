// promise have : 1-status(pending/fullfilled/rejected)
// generally its used for parallel execution


let a = true;

let prom = new Promise(function(resolve,reject){
    if(a){
        resolve("i am succesfull 1")
    }else{
        reject("i am failed 1")
    }
});

console.log(prom);
/*
Promise {<fulfilled>: 'i am succesfull'}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "i am succesfull"
*/


function promise1(complete) {
    return new Promise(function(resolve,reject){
        if(complete){
            resolve("i am succesfull 2")
        }else{
            reject("i am failed 2")       
        }
    }); 
}
/*Promise {<rejected>: 'i am failed'}
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: "i am failed"
promise.js:61 Uncaught (in promise) i am failed*/
console.log(promise1(false));




// usage of .then() and .catch() callback functions

function promise(complete) {
    return new Promise(function(resolve,reject){
        console.log("fetching data 3,please wait");
        setTimeout(() => {
            if(complete){
                resolve("i am succesfull 3")
            }else{
                reject("i am failed 3")       
            }
        }, 5000);
    }); 
}

let onfulfilment = (result)=>{
    console.log(result);
}
let onrejection = (error)=>{
    console.log(error);
}
//.then()&.catch() can be used seperately also if have different values as parameter
promise(true).then(onfulfilment).catch(onrejection);        //.then()=> used to display the resolved solution and .catch()=> used generally to throw some error   

/*fetching data,please wait
promise.js:61 Uncaught (in promise) i am failed
(anonymous) @ promise.js:61
promise1 @ promise.js:57
(anonymous) @ promise.js:70
promise.js:91 i am succesfull*/

promise(true).then((result)=>{          // we can also write it like this
    console.log(result);
}).catch((error)=>{
    console.log(error);
}); 

// another program for promise function

function calc(a,b) {
    return new Promise(function(resolve,reject){
        console.log("fetching data 4,please wait");
        let c  = a/b;
        setTimeout(() => {
            if(a,b){
                resolve(`your answer is: ${c} from 4`)
            }else{
                reject("failed to calculate 4")       
            }
        }, 6000);
    }); 
}
calc(10,2).then((result)=>{                 //get a success message
    console.log(result);
}).catch((error)=>{
    console.log(error);
}); 
calc(10,0).then((result)=>{                 // failed to calculate
    console.log(result);
}).catch((error)=>{
    console.log(error);
}); 

