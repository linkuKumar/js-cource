const marvel_heroes = ['Thor','iron man','spider man','loki']
const dcl_heroes = ['Bat man','flash','super man','rock']

// marvel_heroes.push(dcl_heroes)

console.log(marvel_heroes);
console.log(marvel_heroes[4]);

let allHeroes = marvel_heroes.concat(dcl_heroes) //when we are using concat we needs a new variable to store the data of the arrays allHeroes

/*
allHeroes = [
    'Thor',
    'iron man',
    'spider man',
    'loki',
    'Bat man',
    'flash',
    'super man',
    'rock'
]
*/
// console.log(allHeroes);

// spread operators
// it will open or spred the array which will help us to merge the arrays 

// const all_new_heroes = [...marvel_heroes , ...dcl_heroes]
// console.log('spread operators',all_new_heroes);

// const all_new_heroes = [...marvel_heroes , 'rani'] //basically this ... it will open the array which makes it easy to insert values into it
// console.log('spread operators',all_new_heroes);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity) //it will spred the inside arrays 
// console.log('real_another_array',real_another_array);

// console.log(Array.isArray("Linku"));//it will check whether is is a array or not 
// console.log(Array.from("Linku")); // it  will convert all the items to a array

// console.log(Array.from({name:'hitesh'})); //we have to specify about the array that we need the keys to make an array or else it will return a empty array

// let score1=100
// let score2=200
// let score3=300
// console.log(Array.of(score1,score2,score3));  //this is the result we will get [ 100, 200, 300 ]



