let greet = fname => `GoodMorning ${fname} <br>`;
document.write(greet("kaushik"));


let calc = ((num1,num2)=>{
    sum = num1+num2;
    sub = num1-num2;
    mul = num1*num2;
    div = num1/num2;
    return `sum = ${sum} sub = ${sub} mul = ${mul} div = ${div}`;
});

const a  = calc(12,10);
document.write(a);

console.log(typeof add);