//function

function sayMyName(){
    console.log('L');
    console.log('i');
    console.log('n');
    console.log('k');
    console.log('u');
}

// sayMyName()


// function addTwoNumbers(number1, number2){ // the value  number1, number2 are called parameters
//     console.log( number1 +  number2);
    
// }
// addTwoNumbers(2, '3') // the values inside this are called as arguments
// addTwoNumbers(2, 5) // the values inside this are called as arguments
// const results = addTwoNumbers(2, 5) // the values inside this are called as arguments

function addTwoNumbers(number1, number2){ // the value  number1, number2 are called parameters
    // console.log( number1 +  number2);
    // let result =   number1 +  number2
    // return result
    return number1 +  number2
    
}

const result = addTwoNumbers(2, 5) // the values inside this are called as arguments

// console.log('results',result);

function loginUserMessage(username){
    // if(username===undefined){
        if(!username){
        console.log("please enter a user name");
        return
    }else{
        return `${username} just logged in`
    }
    
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage()); // if no argumnets is passed it will return undefined  [undefined just logged in] 


// when we have many values in a single argument we use rest operators
function calculateCartPrice(...num1){  // which is defined by ...
    return num1
}
// console.log(calculateCartPrice(200,300,400));  // [ 200, 300, 400 ]

function calculateCartPrice(val1,val2 ,...num1){  // which is defined by ...
    return num1
}
console.log(calculateCartPrice(200,300,400,600));



const user ={
    username:'hitresh',
    price:869698
}

function handleObject(anyobject){
    console.log(`userName is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

const myNewArray =[200,309 ]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

