// JavaScript # 4

const myObj = {
    name: "peter parker",
    age: 40,
    rollno: 14,
    status: null,
    value: undefined,
    mycountrystatus: {
country: "Pakistan",
city: "Karachi",
area: "United state of landhi",
phonenum: "423422443"
    }
}
myObj["age"] = 12

// myObj.name = "Abdul Samad"
// myObj.age = 22


// console.log(myObj.mycountrystatus.phonenum)
console.log(myObj["age"])

let a = "Abdul Samad"
let b = 22;
let c = undefined
let d = null
let e = {
    name: "jadu"
}
let f = ["apple", "banana", "grapes"]

console.log(typeof f)

// js functions
function myFunc(){
    console.log("hello mere function")
    const num1 = 34;
    const num2 = 15;
    const total = num1 + num2
    console.log(total)
}

 //function invocation/calling
myFunc()
myFunc()
myFunc()

// arguments/parameters
function myFunc(num1, num2, message){
    console.log("hello mere function")
    // const num1 = 34;
    // const num2 = 10;
    const total = num1 + num2+" " + message
    console.log(total)
}

myFunc(78,474,"in dono ko jama kardo")
myFunc(32,23, "k bhai bol dea hai na kardo add dimag na khao")
myFunc(23,21)



0.6+0.3===0.9