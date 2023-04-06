class employee{
    constructor(){
        console.log("constructor : employee");
    }
}

let a  = new employee();    // normal constructor function

class emp{
    constructor(){
        console.log("constructor : employee");
    }
    info(){
        console.log("employee from info function");
    }
}

class manager extends emp{         //extends keyword use to inherit the properties from base class
    constructor(){
        super()                     // to access the constructor function of base class we should use super() in derived class or else it throws an error
        console.log("constructor : manager")
    }
}

let b  = new manager();
b.info();           //we can use the function which are inside the base class in the derived class