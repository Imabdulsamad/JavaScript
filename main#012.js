 // Sorting in array

// let numbers = [1,2,35,563,173,2]
// let sortedarray = numbers.sort()
// console.log(sortedarray)

// Sorted array in arrow function

let numbers = [1,2,35,563,173,2]
let arrowfuncsorted = numbers.sort((a,b)=>a-b)
console.log(arrowfuncsorted)
console.log(numbers)

// sorting in string

let fruits = ["apple", "banana", "grapes", "peach"]
fruits.sort((a,b)=>b.localeCompare(a))
console.log(fruits)


// sorting in object

let peoples = [
    {name: "Samad", age: 22},
    {name: "tayyab", age: 25},
    {name: "lukman", age: 20},
    {name: "Esha", age: 21},
    {name: "shabnam", age: 54},
    {name: "shiza", age: 15}
]

peoples.sort((a,b)=>a.age-b.age)
console.log(peoples)

// spread operator / rest parameter
let myfruits = ["apple", "banana", "grapes", "guava"]
let myvegetables = ["onion", "carrot", "ladyfinger", "bringle"]

let food = [...myfruits,...myvegetables]
console.log(food)

// reverse method
let mynumbers = [12,34,6,73,12,1]
mynumbers.reverse()
console.log(mynumbers)

// include method
 let emotions = ["😀", "😅", "😛"]
console.log(emotions.includes("😀"))
console.log(emotions.includes("😒"))
// console.log(emotions)

// min max array

let somenumbers = [2,357,5,2,16,8,4,12,6]
console.log(Math.min(...somenumbers))
console.log(Math.max(...somenumbers))

// // map method

// let merenumbers = [1,24,74,36,78]
// let mapnumber = merenumbers.map((value)=>{
//     return value + 1
// })
// console.log(merenumbers)
// console.log(mapnumber)

// filter method

// let merenumbers1 = [1,24,74,36,78,22,2]
// let filternumber = merenumbers1.filter((value)=>{
//     return value<10
// })

// console.log(merenumbers1)
// console.log(filternumber)


// reduce method
let merenumbers2 = [1,24,74,36,78,22,2]
let reducenumbers = merenumbers2.reduce((value1 , value2)=>{
    return value1 + value2
})

console.log(merenumbers2)
console.log(reducenumbers)


// arrow function

// let arrow = ()=>{
//     console.log("arrow function")
// }
// arrow()

// short syntax of arrow function
let arrow = ()=>console.log("arrow function")
arrow()
