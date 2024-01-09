// CLOSURE
// Function along with its Lecsical Scope bundlesd together forms a CLOSURE.

//Uses of CLOSURES
    //Module Design Pattern
    //Currying
    //Functions like once
    //Memoize
    //Maintaing state in async world
    // setTimeouts
    //Iterators


function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y; //When returning a function then return y() is inccorrect instead write return y;

    // return function y(){  |
    //     console.log(a);   | 
    // }                     |
    //This 3 lines of code is similar to return y():
}
x();

//Thousands of lines of code

z(); //It print 7, which is the value of var a