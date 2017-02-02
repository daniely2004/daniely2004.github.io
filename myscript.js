var operand1;
var operand2;

function getNumbers(){
  operand1 = Math.floor(Math.random() * 50) +1;
  operand2 = Math.floor(Math.random() * 50) +1;
  document.getElementById("operand1").innerHTML = operand1;
  document.getElementById("operand2").innerHTML = operand2;
  document.getElementById("userAnswer").innerHTML ="";
} 

function checkAnswer(){
  var userSum = document .getElementById("userAnswer").value;
  var sum = operand1 + operand2;
  if(userSum == sum){
    document.getElementById("results").innerHTML="Correct!";
  }
  else{
    document.getElementById("results").innerHTML= "Wrong!";
  }
}


