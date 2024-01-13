// JavaScript # 6

// console.log("hello")

let myobj = {
    name: "Abdul Samad",
    rollno: 14,
    section: "A",
    status: undefined,
    value: null,
    array: [1,234,43,223,2,1],
    greet: function myfuc(){
        console.log("this is a function inside a object")
    }
}

delete myobj.rollno
myobj.name = "harry potter"
// console.table(myobj.name)
// console.table(myobj.array)
// console.table(myobj.greet())
// console.table(myobj)

// JavaScript number method

// console.log("hello")
// console.log("hello g")
let meranum = 12
meranum = 5073.336
// console.log(meranum.toString())
// console.log(meranum.toFixed())
// console.log(meranum.toPrecision(7))
// console.log(meranum.toExponential())
// console.log(typeof meranum)

let meraprompt = prompt("Enter your name")
alert("My name is:"+ " "+meraprompt)

// let myconfirm = confirm("Are you sure you want to delete this file?")
// alert("your file is been deleted"+ " "+myconfirm)