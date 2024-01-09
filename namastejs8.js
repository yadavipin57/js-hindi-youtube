// The Temporal Dead Zone (TDZ) is a concept in JavaScript that refers to the time span between the entering of the scope and the actual declaration of a variable using let or const. During this period, trying to access the variable will result in a ReferenceError. This is a behavior introduced by the ES6 (ECMAScript 2015) specification and is not applicable to variables declared with var //

// Things learned:
// 1. let and const are hoisted but its memory is allocated at other place than window which cannot be accessed before initialisation.
// 2. Temporal Dead Zone (TDZ) exists until variable is declared and assigned a value.
// 3. window.variable OR this.variable will not give value of variable defined using let or const.
// 4. We cannot redeclare the same variable with let/const(even with using var the second time).
// 5. const variable declaration and initialisation must be done on the same line.
// 6. There are three types of error: [1] referenceError {given where variable does not have memory allocation} [2] typeError {given when we change type that is not supposed to be changed} [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
// 7. Use const wherever possible followed by let, Use var as little as possible(only if you have to). It helps avoid error.
// 8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.



let a=10;
var b=15;
console.log(b);