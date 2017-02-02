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
var pics = ["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3JNVhh090SAK1zLdP3EQx0-X1dM7rvzcjEJOB0hyQDs5-37ur,https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1cX0dVY9EEZ3tPhwxkWyn0g3hiH9mbutosHQ_7HBpoEWFaR7r6g,https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSt1ascc-fVDe8Zr22zm047VfjSlBGt1cda8KM3nQFv-UR0TB5mMg,https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSt1ascc-fVDe8Zr22zm047VfjSlBGt1cda8KM3nQFv-UR0TB5mMg"];

var picIndex = 0;

function goLeft(){
  if(picIndex > 0){
    document.getElementById("pic").src=pics[picIndex];
    picIndec = picIndex - 1;
    console.log(picIndex);
  }
}

function goRight(){
  if(picIndex < (pics.length - 1)){
    document.getElementById("pic").src=pics[picIndex];
    picIndex = picIndex + 1;
    console.log(picIndex);
  }
}