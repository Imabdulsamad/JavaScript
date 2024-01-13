// let parent = document.querySelector(".parent")
// console.log(parent.firstElementChild)
// console.log(parent.firstElementChild.innerHTML)

// console.log(parent.lastElementChild)
// console.log(parent.lastElementChild.innerHTML)


// let mouseOver = document.querySelector("#mouseOver")
// mouseOver.addEventListener("mouseover", ()=>{
//     alert("mouse over hoa hai")
// })

// let DoubleClick = document.querySelector("#doubleClick")

// DoubleClick.addEventListener("dblclick", function(){
//     DoubleClick.innerHTML= "Double click hoa hai"
//     alert("Hogya double click")
// })

// let rightClick = document.querySelector("#RightClick")
// rightClick.addEventListener("contextmenu", (event)=>{
//     rightClick.innerHTML = "Right click hoa hai"
//      event.preventDefault();
//     alert("Right click done")
// })

let bulb = document.querySelector("#bulb")
let btn = document.querySelector("button")

let myswitch = 0
btn.addEventListener("click", function(){
if(myswitch==0){
    bulb.style.backgroundColor = "yellow"
    console.log("On")
    myswitch = 1
}
else{
    bulb.style.backgroundColor = "transparent"
    console.log("Off")
    myswitch = 0
}
})