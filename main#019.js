

// function navigator(page){
//     const content = document.getElementById('navigate')
//     switch (page){
//         case 'home':
//         content.innerHTML = "<h1>This is a home page</h1>"
//         break;
//         case 'about':
//             content.innerHTML = "<h1>This is a about page</h1><ul><li>Samad</li><li>Ayyan</li><li>Tayyab</li></ul>"
//     break;
// case 'services':
//     content.innerHTML = "<h1>This is a services page</h1>"
//     break;
//     default:
//     break;
//     }
// }

// const mysymbol = Symbol("this is symbol")
// console.log(mysymbol)

// const symbol1 = Symbol("hi")
// const symbol2 = Symbol("hi")
// // console.log(symbol1===symbol2)
// console.log(typeof symbol1)

function outerFunction(outervarible){
    function innerFunction(innervarible){
        
console.log("Outer Function" + outerFunction)
console.log("Inner Function" + innerFunction)
    }
    return innerFunction;
    
}

const clousureExample = outerFunction("outer value")

clousureExample("inner value")