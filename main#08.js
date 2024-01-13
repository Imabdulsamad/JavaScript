// JavaScript # 8

console.log("hello")

// Logical operators

// &&
// OR/||
// !

// let first = false
// let second = false
// console.log(first&&second)

// let third = false
// let forth = false
// console.log(third||forth)

// let fifth = !false
// console.log(fifth)


// let num1 = prompt("Enter first number")
// let num2 = prompt("Enter second number")

// if (num1 === ""|| num1===null){
//     alert("you are giving an unvalid input")
// }

// else if(num2 === "" || num2 === null){
//     alert("you are giving an unvalid input")
// }

// else{
//     let number1 = Number(num1)
//     let number2 = Number(num2)
    
//     let total = number1 + number2
    
//     alert("Sum of two number is:" + total)
// }


let convert = function myfunc(arr1, arr2){
 return arr1.toString()===arr2.toString()  
}

let array1 = ["Apple", "Grapes", "Gauva"]
let array2 = ["Apple", "Grapes", "Gauva"]

let result = convert(array1, array2)

console.log(result)

let a = Math.abs(-5)
console.log(a)

let b = Math.round(6.6)
console.log(b)

let c = Math.ceil(2.1)
console.log(c)

let d = Math.floor(6.3)
console.log(d)

let e = Math.sqrt(22)
console.log(e)


let f = Math.min(3,45,75,4,8,2)
console.log(f)