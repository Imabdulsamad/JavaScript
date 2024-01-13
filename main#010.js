// JavaScript # 10

console.log("hello")

const mydate = new Date()
console.log(mydate)

const d = new Date(20-4-2023)
d.getUTCFullYear()
console.log(d.toLocaleDateString())

const f = new Date()
console.log(f.getFullYear())

const g = new Date(21-10-2023)
console.log(g.getMonth())

// for loop

// let mycharacters = ["harry", "ron", "harmoine"]

// mycharacters.push("professor")
// console.log(mycharacters.length)

// for (let i=0; i<mycharacters.length; i++){
//     console.log(i)
//     console.log(mycharacters[i])
// }

// let i = 0
// while(i<=10){
//     console.log(i)
//     i++
// }

// let i=1;
// while(i<=10){
    
//     console.log(i)
//     i++;
// }

// let b=110
// do{
//     console.log(b+1)
//     b++
// }while(b<=10)


const students = {
    math: ["samad", "ayyan"],
    physics: ["tayyab"],
    chemistry: [],
    greet(){
        console.log("hello")
    }
}

for (const value in students){
    // console.log(myfruits)
    console.log(value)
}


const fruits = ["apple", "banana", "grapes", "orange", null, {
    name: "samad",
    age: 22
}]



for (const key of fruits){
    console.log(key)
}