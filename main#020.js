// JavaScript # 20

// ES6 Destructring

// const person = {
//     name: "Abdul Samad",
//     country: "Pakistan"
// }

// const {name, country} = person
// console.log('Name', name, "Country:", country)

// Rest Parameter

// const sum = (...number)=>{
//     return number.reduce((acc, num)=>{
//     return acc+num
//     })
    
// }

// console.log((1,34,6,7,42329874,6756,6565))

// Map and Set

// const numbersMap = new Map().set("One", 1)

// const unique = new Set([1,3,57,23,0,6,9,0,3,5,33])

// unique.forEach(number=> console.log(number))

// Callbacks

// function getFood(callback){
//     setTimeout(()=>{
//         console.log("Food mill gya")
//         callback()
//     },1000)
// }

// function vanueMilgya(callback){
//     setTimeout(()=>{
//         console.log("vanue bhi mil gya")
//         callback()
//     },1000)
// }


// function DJmilgya(callback){
//     setTimeout(()=>{
//         console.log("DJ mil gya")
//         callback()
//     },1000)
// }

// getFood(()=>{
//     vanueMilgya(()=>{
//         DJmilgya(()=>{
//             console.log("All tasks done")
//         })
//     })
// })

// Promises

// function foodMilgya(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Food milgya")
//             resolve()
//         },1000)
//     })
// }
// function baratagyi(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("barart Sahi hai agyi")
//             resolve()
//         },1000)
//     })
// }

// function Khanakhulgya(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Phoro jaldi nutt bold")
//             resolve()
//         },1000)
//     })
// }


// foodMilgya()
// .then(()=>baratagyi())
// .then(()=>Khanakhulgya())
// .then(()=>console.log("chalo khapa hogya ab ghar"))


// async function process(){
//     await foodMilgya()
//     await baratagyi()
//     await Khanakhulgya()
//     await console.log("all tasks done")
// }
// process()

console.log("first")
setTimeout(()=>{
    console.log("Second")
},0)

console.log("third")