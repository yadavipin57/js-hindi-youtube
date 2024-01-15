const twitterUser = new Object()  // This is a Singleton object
// const twitterUser = {} ---> This line returns the same value as line 1, this is also a object
console.log(twitterUser)

twitterUser.id = "123abc"
twitterUser.name = "Vipin"
twitterUser.isLoggedIn = false

console.log(twitterUser);

const regularUser = {
    email: "yadavipin57@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vipin",
            lastname: "Yadav"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname);
console.log(regularUser);

console.log("-----------------------");

// merging or combining multiple objects together

const obj1 = { 1: "a", 2: "b"}
const obj2   = { 3: "c", 4: "d"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
//line 34, 35, 36 all are coorect way of merging the multiple objects
console.log(obj3)


// when values come from database, it comes in array of objects
const users = [
    {
        id: 1,
        email: "vy@gmail.com"
    },
    {
        id: 1,
        email: "vy@gmail.com"
    },
    {
        id: 1,
        email: "vy@gmail.com"
    }
]

console.log(users[1].email);

console.log(twitterUser);
// we can specifically take out keys or values from the object using the below syntax
console.log(Object.keys(twitterUser));
console.log(Object.values(twitterUser));
console.log(Object.entries(twitterUser));

console.log(twitterUser.hasOwnProperty('isLoggedIn')); // true
console.log(twitterUser.hasOwnProperty('isLogged')); // false

