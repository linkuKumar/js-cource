const tinderUser = new Object()


tinderUser.id = '123abc'
tinderUser.name = 'linku'
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:'linkukumargauda@gmail.com',
    fullname :{
        userfullname:{
            firstname:"linku",
            lastname:"kumar"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname.userfullname);

