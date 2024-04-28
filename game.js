
var User_Num = document.getElementById("User_Num")
var Result_Number = document.getElementById("Result_Number")
var result_Box = document.getElementById("result_Box")




function  CheckNumber(userNumber){
    // alert(userNumber)

     var randomNumber = Math.ceil(Math.random()*6)

     User_Num.innerText = userNumber

     Result_Number.innerText = randomNumber


     if (userNumber == randomNumber) {
        result_Box.innerText = "congratulations ! you won"
        result_Box.style.color = "green"
     }else{
        result_Box.innerText = "sorry you lose"
     }
}