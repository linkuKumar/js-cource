// arrow functions 
const user = {
    username: 'Linku',
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to my website`);// this is used to access the curren context means inside the block only variables can be accesed
        // console.log(`${username} , welcome to my website`);// this is used to access the curren context means inside the block only variables can be accesed username is not defined
        console.log('this',this);
    }
   
}

// console.log(user);
// user.welcomeMessage()
// user.username ='kumar'
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username ='Linku'
//     console.log(this.username);//undefined     , inside a function this keyword will not work 
//     // console.log(username);
// }
// chai()

// const chai = function (){
//     let username ='Linku'
//         console.log(this.username);//undefined     , inside a function this keyword will not work 
//         // console.log(username);
// }
// chai()


//arrow function 
const chai = ()=> {
    let username ='Linku'
        // console.log(this.username);//undefined     , inside a function this keyword will not work 
        console.log(this);//undefined     , inside a function this keyword will not work 
        // console.log(username);
}
// chai()



// const addTwo = (num1,num2) =>{
//     return num1+num2 //when we write down inside curly braces we have to write down return key word
// }
// console.log(addTwo(5,6));

// const addTwo =(num1,num2)=> (num1 + num2) // here we no need to write down return 
const addTwo =(num1,num2)=> ({username:'hitesh'}) // here we no need to write down return 
console.log(addTwo(5,6)); 
