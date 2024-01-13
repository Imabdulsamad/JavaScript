// Stop Watch

let min = 0
let sec = 0
let msec = 0

let minHeading = document.getElementById("min")
let secHeading = document.getElementById("sec")
let msecHeading = document.getElementById("msec")

let interval

function timer(){
    msec++
    msecHeading.innerHTML = msec

    if(msec >=100){
        sec++
        secHeading.innerHTML = sec
        msec = 0
    } else if (sec >=10){
        min++
        minHeading.innerHTML = min
        sec = 0
    }
}

function start(){
    interval = setInterval(timer, 10)
}

function pause(){
    clearInterval(interval)
}

function reset(){
min = 0
sec = 0
msec = 0
minHeading.innerHTML = min
secHeading.innerHTML = sec
msecHeading.innerHTML = msec
}


// function fetchData(callback) {
//     setTimeout(() => {
//       const data = "Some data";
//       callback(data);
//     }, 1000);
//   }
  
//   fetchData((result) => {
//     console.log(result);
//   });
  
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       // Simulate an asynchronous operation
//       setTimeout(() => {
//         const success = true;
//         if (success) {
//           const data = "Some data";
//           resolve(data);
//         } else {
//           reject("Error occurred");
//         }
//       }, 1000);
//     });
//   }
  
//   fetchData()
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.error(error);
// //     });

// async function fetchData() {
//     return new Promise((resolve) => {
//       // Simulate an asynchronous operation
//       setTimeout(() => {
//         const data = "Some data";
//         resolve(data);
//       }, 1000);
//     });
//   }
  
//   async function fetchDataAndPrint() {
//     try {
//       const result = await fetchData();
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   fetchDataAndPrint();
  
  
// Tempete Literals
const myname = "abdul samad"
console.log(`My name is: ${myname}`)

// console.log("My name is:",myname)