var count = 1
function guess(){
    const LUCKY_NUMBER = 7
    var guessedNumber = document.getElementById("num").value
    if(guessedNumber > 10 || guessedNumber < 1){
        alert("Number should be between 1 to 10")
    }
    else{
        if(guessedNumber == LUCKY_NUMBER){
            
            document.getElementById("result").innerHTML="Congrats!! You guessed it right in "+count +" attempts."
        }
        else{
            document.getElementById("result").innerHTML="Try Again! Better luck next time."
            count++
        }
    }
}

// function greet(){
//     let username = Number(document.getElementById("userId").value)
//     alert(typeof username)
//     document.getElementById("value").innerHTML="CONGRATULATIONS "+username+"!!"
//     document.getElementById("userId").value = ""
// }

// function promptDemo(){
//     let employee = prompt("Please enter your name", "John")
//     if(employee != null && employee != ""){
//         alert(employee)
//     }
//     else{
//         alert("Incorrect Employee")
//     }
// }

// function confirmDemo(){
//     let text = "Press OK or Cancel"
//     if(confirm(text) == true){
//         alert("OK")
//     }
//     else{
//         alert("Cancel")
//     }
// }

// let a=10
// let b=20
// console.log(a+b)
// console.log("Welcome")

/*
 Variable: Named storage

 Data Type:
    - string (All words, characters will be string)
    - number (Integers)
    - boolean (true, false)
    - object 
    - Arrays (Group of data)

        -String
            10 + 43 = 1043

        -Number
            10 + 43 = 53

*/
