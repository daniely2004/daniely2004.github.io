var character="";

function chooseX(){
  character="X";
}

function chooseO(){
  character="O";
}

function makeMove(divLocation){
  var insideDiv= document.getElementById(divLocation).innerHTML;


  if(insideDiv === ""){
    document.getElementById(divLocation).innerHTML=character;
    document.getElementById("notes").innerHTML="";
  }
  else{
    document.getElementById("notes").innerHTML="Already made a move here "+"<p>Try another spot!</p>";
  }
  if(checkWinner()){
    document.getElementById("notes").innerHTML=character+" wins!";
    alert(character + " won! Let's play again! ");
    location.reload();
  }
}

function checkWinner(){
  var r1c1=document.getElementById("row1col1").innerHTML;
  var r1c2=document.getElementById("row1col2").innerHTML;
  var r1c3=document.getElementById("row1col3").innerHTML;
  var r2c1=document.getElementById("row2col1").innerHTML;
  var r2c2=document.getElementById("row2col2").innerHTML;
  var r2c3=document.getElementById("row2col3").innerHTML;
  var r3c1=document.getElementById("row3col1").innerHTML;
  var r3c2=document.getElementById("row3col2").innerHTML;
  var r3c3=document.getElementById("row3col3").innerHTML;
  
  if(r1c1 === r1c2 && r1c1==r1c3 && r1c1 !== ""||
    r2c1 === r2c2 && r2c1==r2c3 && r2c1 !== ""||
    r3c1 === r3c2 && r3c1==r3c3 && r3c1 !== ""||
    r1c1 === r2c1 && r1c1==r3c1 && r1c1 !== ""||
    r1c2 === r2c2 && r1c2==r3c2 && r1c2 !== ""||
    r1c3 === r2c3 && r1c3==r3c3 && r1c3 !== ""||
    r1c1 === r2c2 && r1c1==r3c3 && r1c1 !== ""||
    r1c3 === r2c2 && r1c3==r3c1 && r1c3 !== ""){
    return true;
  }
  else{
     return false;
     }
}

var operand1;
var operand2;
function getNumbers(){
  operand1=Math.floor(Math.random()*50)+1;
  operand2=Math.floor(Math.random()*50)+1;
  document.getElementById("operand1").innerHTML=operand1;
  document.getElementById("operand2").innerHTML=operand2;
  document.getElementById("userAnswer").innerHTML="";
}

function checkAnswer(){
  var userSum = document.getElementById("userAnswer").value;
  var sum= operand1+operand2;
  if(userSum==sum){
    document.getElementById("results").innerHTML="Correct!";
  }
  else{
    document.getElementById("results").innerHTML="Wrong!";
  }
    
}
var operand3;
var operand4;
function getNumbers2(){
  operand3=Math.floor(Math.random()*50)+1;
  operand4=Math.floor(Math.random()*50)+1;
  document.getElementById("operand3").innerHTML=operand3;
  document.getElementById("operand4").innerHTML=operand4;
  document.getElementById("userAnswer2").innerHTML="";
}

function checkAnswer2(){
  var userProduct = document.getElementById("userAnswer2").value;
  var product= operand3*operand4;
  if(userProduct==product){
    document.getElementById("results2").innerHTML="Correct!";
  }
  else{
    document.getElementById("results2").innerHTML="Wrong!";
  }
    
}
var operand5;
var operand6;
function getNumbers3(){
  operand5=Math.floor(Math.random()*50)+1;
  operand6=Math.floor(Math.random()*50)+1;
  document.getElementById("operand5").innerHTML=operand5;
  document.getElementById("operand6").innerHTML=operand6;
  document.getElementById("userAnswer3").innerHTML="";
}

function checkAnswer5(){
  var userpee = document.getElementById("userAnswer3").value;
  var pee= operand5-operand6;
  if(userpee==pee){
    document.getElementById("results3").innerHTML="Correct!";
  }
  else{
    document.getElementById("results3").innerHTML="Wrong!";
  }
    
}
var operand7;
var operand8;
function getNumbers4(){
  operand7=Math.floor(Math.random()*200)+1;
  operand8=Math.floor(Math.random()*10)+1;
  document.getElementById("operand7").innerHTML=operand7;
  document.getElementById("operand8").innerHTML=operand8;
  document.getElementById("userAnswer4").innerHTML="";
}

function checkAnswer4(){
  var userp009 = document.getElementById("userAnswer4").value;
  var p009= operand7/operand8;
  if(userp009==p009){
    document.getElementById("results4").innerHTML="Correct!";
  }
  else{
    document.getElementById("results4").innerHTML="Wrong!";
  }
    
}

var pics = ["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ3JNVhh090SAK1zLdP3EQx0-X1dM7rvzcjEJOB0hyQDs5-37ur",
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT1cX0dVY9EEZ3tPhwxkWyn0g3hiH9mbutosHQ_7HBpoEWFaR7r6g",
            "data:image/jpeg;base64,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",
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSt1ascc-fVDe8Zr22zm047VfjSlBGt1cda8KM3nQFv-UR0TB5mMg"];

var picIndex = 0;

function goLeft(){
  if(picIndex > 0){
    picIndex = picIndex - 1;
    document.getElementById("pic").src=pics[picIndex];

    console.log(picIndex);
  }
}

function goRight(){
  if(picIndex < (pics.length - 1)){
     picIndex = picIndex + 1;
    document.getElementById("pic").src=pics[picIndex];
    console.log(picIndex);
  }
}