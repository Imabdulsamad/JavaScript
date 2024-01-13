// JavaScript # 11

console.log("hello")

// // Break Statement

// const myanimals = ["tiger", "fox", "giraffe", "donkey", "cat"]
// let animalfound = false

// for (let animal of myanimals){
//     console.log(animal)
//     if(animal === "cat" ){
//         animalfound = true
//         break
//     }
//     console.log({animalfound})
// }
// console.log({animalfound})


// Continue statement

// const fruits = ["apple", "banana", "grapes", "pineapple", "japani phal"]

// for (let i=0; i<fruits.length; i++){
//     let fruit = fruits[i]
//     console.log(fruit)
// if(fruit === "banana"){
//     continue
// }
// console.log("index of fruits is:", i)
// console.log("processing",fruit)
// }

// Array and methods

// const meredost = ["samad", "ayyan", "ali", "areeb", "lukman"]
// meredost[3]= "shakoor"
// console.log(meredost[5])
// console.log(meredost.length)

// max length of an array = total length -1
// console.log(meredost[meredost.length-2])
// console.log(meredost)


// Array method

// push method
// let fruits = ["apple", "banana", "pineapple", "grapes"]
// fruits.push("chiku", "guava", null, undefined, {name: "ayyan"},
//  ()=>{
//     console.log("hello")
// })
// console.log(fruits)



// pop method

// let fruits = ["apple", "banana", "pineapple", "grapes"]
// let popaarray = fruits.pop()
// console.log(popaarray)
// console.log(fruits)


// // shift method
// let fruits = ["apple", "banana", "pineapple", "grapes"]
// let shiftarray = fruits.shift()
// console.log(shiftarray)
// console.log(fruits)

// unshift

// let fruits = ["apple", "banana", "pineapple", "grapes"]
// let unshift = fruits.unshift(32,2)
// console.log(unshift)
// console.log(fruits)


// slice

// let mydays = ["monday", "tuesday", "wednesday", "thursday", "friday", "sat"]
// let slicemethod = mydays.slice(2,5)
// console.log(slicemethod)
// console.log(mydays)


// splice 
// let mydays = ["monday", "wednesday", "thursday", "friday", "sat"]
// let splicemethod = mydays.splice(1,0, "tuesday")

// console.log(splicemethod)
// console.log(mydays)

// join 
// let mydays = ["monday", "tuesday", "wednesday", "thursday", "friday", "sat"]
// let joinmethod = mydays.join("|||")
// console.log(joinmethod)
// console.log(mydays)


// sorting in array

// let mynumbers = [1,3,68,2,35,9,5,24,2322]
// let sortedarray = mynumbers.sort()
// console.log(sortedarray)
// console.log(mynumbers)




// let merafunc = function myfunc(){
//     console.log("normal function")
// }

// merafunc()

// // Arrow function

// let arrowfunc = ()=>{
//     console.log("arrow function")
// }
// arrowfunc()