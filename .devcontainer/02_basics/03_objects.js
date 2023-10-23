//singleton

//object literals
const mySym = Symbol('key1')

const jsUser = {
    name:"Linku",
    "Full name":"Linku kumar gauda",
    [mySym]:"myKey1",
    age:"25",
    location:"odisha",
    email:"linku@gmail.com",
    isLoggedIn:false,
    lastLoggedInDays:['Monday','Saturday']
}

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser["Full name"]);// ths is also a way we can access an key inside object
// console.log(jsUser[mySym]);//  myKey1


jsUser.email = 'linkukumarofficial@gmail.com'
// Object.freeze(jsUser)
jsUser.email = 'LinkuKumargauda@gmail.com'
console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello Linku")
}

jsUser.greetingsTwo = function(){
    console.log(`Hello Linku,${this.name}`)
}

// console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());
console.log(jsUser);
