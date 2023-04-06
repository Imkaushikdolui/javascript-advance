//function inside another function accessing the outer function values is called as closure.

function outerfunction(outervariable) {
    return function innerfunction(innervariable) {
        console.log('outervariable is :' + outervariable);
        console.log('innervariable is :' + innervariable);
    }
}
const newfunction = outerfunction("outer");
newfunction("inner");