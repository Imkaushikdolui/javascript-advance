class hello{
    message(){
        console.log("HEY THERE!!!");
    };
    greet(){
        console.log("GOOD MORNING");
    }
}

let a = new hello();
a.message();
a.greet();

// different methods :-

class abc{
    constructor(name){
        this.sname = name;
        console.log("constructor function")     // constructure function :- it get call automatically when a object is created for the class
    };
    hello(){
         console.log(`hello ${this.sname}`)     // prototype function :- nothing but a normal function
    };
    static staticmethod(){                      // static function
        console.log("static method") 
    };

}


let func = new abc("kaushik");
func.hello();
//func.staticmethod();        // gives an type error becuase static function cant be call with use of instance of a class , it should be call with the class name only
abc.staticmethod();