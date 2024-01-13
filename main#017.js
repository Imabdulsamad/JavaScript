// Color Picker
const button = document.getElementById("btn")
const result = document.getElementById("result")

const colorPicker = async()=>{
    const eyeDropper = new EyeDropper()
    const {sRGBHex} = eyeDropper.open()
    result.innerHTML = sRGBHex
}

button.addEventListener("click", colorPicker)

// const button = document.getElementById("btn")
// const result = document.getElementById("result")

// const colorPicker = async () => {
//     try {
//         const eyeDropper = new EyeDropper()
//         const { sRGBHex } = await eyeDropper.open()
//         result.innerHTML = sRGBHex
//     } catch (error) {
//         // Handle errors, for example, if EyeDropper is not supported
//         console.error("Error:", error)
//     }
// }

// button.addEventListener("click", colorPicker)


// For Each

// const friends = ["Tayyab", "Ayyan", "Khurram", "Fahad"]
// friends.forEach(function(friend, index){
//     // console.log("The index of:",index,friend)
//     console.log(The index is ${friend}, ${index}) //Tempelete literals
// })

// Ternory operator
// const age = 20
// if(age >= 18){
//     console.log("You are an adult")
// }

// else{
//     console.log("You are a teenager")
// }

const age = 20
const result1 = age >=18 ? "You are an adult" : "You are a teenager"

console.log(result1)