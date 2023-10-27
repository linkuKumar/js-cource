//for of loops 

// const arr =[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }


// const greetings = ' hello world'
//  for (const num of greetings) {
//     console.log(num);
//  }


//maps

const map = new Map()

map.set('IN','india')
map.set('USA','United State Of America')
map.set('Fr','France')
map.set('Uk','United Kingdom')

// console.log(map);

for (const [key,value] of map) {
console.log(key, '-',value);
    
}