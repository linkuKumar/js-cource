//Arrays
const  myArray = [1,2,3,4,5,6]
// console.log(myArray[0]);

const myArr2 = new Array(1,2,3,4,5,6)
// console.log(myArr2);

//array methods 
// myArr2.push(6)
// myArr2.push(7)
// myArr2.unshift(9)// it inserted the number in the 1st index
// myArr2.shift()
// console.log(myArr2);
// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(6));

//slice and splice 

const myArr = new Array(1,2,3,4,5,6)
console.log('A',myArr);

const myn1 = myArr.slice(1,3) //the new array which will be created will have 2,3,4  [myn1] = [ 2, 3 ]

console.log(myn1);
console.log('B',myArr); //this is the original array after splice operations myArr = [ 1, 2, 3, 4, 5, 6 ] here there is no modification happens with tehe original array

const myn2 = myArr.splice(1,3)
console.log('C',myArr);// here the original array gets modified and the result is as myArr= [ 1, 5, 6 ]
console.log(myn2);  //[ 2, 3, 4 ] here the range is included and the original array gets modified.


