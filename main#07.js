// JavaScript # 7

// function ruturnfuc(){
//     return [1,23,2,423]
// }

// console.log(ruturnfuc())

let mynum = new Number(12)
// mynum = 50.323
// console.log( typeof 12)
console.log(mynum===12)


let obj = {}
let arr = []
console.log(typeof arr)

// Conditional Statement

// let num1 = prompt("Enter first number")
// let num2 = prompt("Enter second number")

// let number1 = Number(num1)
// let number2 = Number(num2)

// if(number1 > number2){
// alert("num1 is greater ")
// }
// else if(number1 < number2){
// alert("num1 is smaller")
// }

// else{
// alert("dasga")
// }

// Switch case Statements

let daysofweek = prompt("Enter the day in between Monday to Sunday")

switch (daysofweek){
    case "Monday":
     alert("Oh! i dont like moday at all");
     
     break;
    
     case "Sunday":
        alert("Oh! i like sunday very much");
        
        break;

        case "Tuesday":
            alert("Oh! i  like tuesday ");
            
            break;

            case "Wednesday":
                alert("Oh! wed is so good");
                
                break;

                case "Thursday":
                    alert("Oh! i do like thursday ");
                    
                    break;

                    case "Friday":
                        alert("Oh! Aaj tou biryani day hai");
                        
                        break;

                        case "Saturday":
                            alert("oh this is so awesome ");
                            
                            break;

                            default:
                                alert("Pagal hogye ho kea sahi value do")
}