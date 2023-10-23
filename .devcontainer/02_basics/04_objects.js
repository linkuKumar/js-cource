const tinderUser = new Object()


tinderUser.id = '123abc'
tinderUser.name = 'linku'
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// const regularUser = {
//     email:'linkukumargauda@gmail.com',
//     fullname :{
//         userfullname:{
//             firstname:"linku",
//             lastname:"kumar"
//         }
//     }
// }
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname);


const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
const obj3 = {5:'e',4:'f'}

// const newObj = {obj1,obj2}
// console.log(newObj.obj2);


// const newObj2 = Object.assign({} , obj1,obj2,obj3)
// const newObj2 = Object.assign(obj1,obj2,obj3) //this will also return the same value as the abhove code but this is not preferable/
// const newObj2 = {...obj1, ...obj2, ...obj3} //this is the easy way of doing it
// console.log('newObj2',newObj2);

// how to handle array of objects
const users =[
    {
        id:1,
        email:'linku@gmail.com',  
    },
    {
        id:1,
        email:'linku@gmail.com',  
    },
    {
        id:1,
        email:'linku@gmail.com',  
    },
    {
        id:1,
        email:'linku@gmail.com',  
    },
]

users[1].email

// console.log(Object.keys(tinderUser))//[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) //[ '123abc', 'linku', false ]
// console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'linku' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//de structuring of objects 

const course ={
    courseNmae:"Js In Hindi",
    price:"999",
    courseInstructure:'Linku'
}

// course.courseInstructure

// const {courseInstructure} = course
// const {courseInstructure : linku} = course // this is also another way of de structurling values inside an object
// console.log(linku);

//de sturcturing in react
// const navbar =({complany})=>{
// }
// navbar(complany ="linku")


//API structure
// {
//     "name":'linku',
//     "age":'25',
//     "email":'linku@gmail.com',
//     "cource":'js',
// }

