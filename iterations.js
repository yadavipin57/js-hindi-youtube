// Iterations
// for Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(i);
}

// for loop for table from 1 to 10
for(let i=1; i<=10; i++){
    console.log(`Table of ${i}`);
    for(let j=0; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// There is a also a "break" and "continue" keyword

// while and do while loop

let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
