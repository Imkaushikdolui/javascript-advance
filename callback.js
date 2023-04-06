function sum(num1,num2,callback){
    var sum = num1+num2;
    document.write("The sum is:" + sum);
    callback(sum);
}
function hello(sum){
    alert("hey there!!" + sum)
}
sum(12,10,hello);

// callback is just like passing a function as an argument in another function!!