// let a =10
// const b = 20
// var c =30

// console.log(a);
// console.log(b);
// console.log(c);
// var c = 300

let a =300

if(true){
    let a =10 // this two variable are block level
    const b = 20//let and const can not be accessed when we console them outside
    var c =30
    // console.log('Inner scope',a);
}

// console.log(a);
// console.log(b);
// console.log(c);// var is posible out side of the block


//functions

function one(){
    const username ='Linku'

    function two(){
        const website ='youtube'
        // console.log(username);//this console will work as the paren variables can b e accessed by clild  functions or inner functions but vice versa is not allowed
    }
    // console.log(website); // this will trow an error 
    two()
}
// one()

if(true){
    const username='Linku'

    if(username==='Linku'){
        const website ='youtube'
        // var website ='youtube'
        // console.log(username + website);
    }
    // console.log(website);
}


// ++++++++++++++++++++++++++++++++++++++++++=== intresting concepy +++++++++++++++++++==

// addone(5)
console.log(addone(5));
function addone(num){
    return num+1
}

// addone(5)

// addTwo(5) if we call a function which is declared in a variable before its function it will throw an error
// console.log(addTwo(5));
const addTwo = function (num){
    return num+2
}
console.log(addTwo(5));

// addTwo(5)