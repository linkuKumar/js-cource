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
    console.log('Inner scope',a);
}

// console.log(a);
// console.log(b);
// console.log(c);// var is posible out side of the block



