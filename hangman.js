var word = "";

function startGame(){
  pickWord();
  
  alert(word)
}

var words = ["dog", 
            "cat",
            "life", 
            "class", 
            "code",
            "school",
            "computer", 
            "supercalifragilisticexpialidocious",
            "pneumonoultramicroscopicsilicovolcanoconiosis",
            "basketball",
            "curry",
            "python",
            "jordan",
            "pe",
            "harrison",
            "juhn",
            "elcetric",
            "guitar",
            "church",
            "a",
            "millikan",
            "atom",
            "science",
            "antidisestablishmentarianism",
            "floccinaucinihilipilification",
            "methionylglutaminylarginyltyrosylglutamylserylleucylphenylalanyla lanylglutaminylleucyllysylglutamylarginyllysylglutamylglycylalanylph enylalanylvalylprolylphenylalanylvalylthreonylleucylglycylaspartylpr olylglycylisoleucylglutamylglutaminylserylleucyllysylisoleucylasparty lthreonylleucylisoleucylglutamylalanylglycylalanylaspartylalanylleuc ylglutamylleucylglycylisoleucylprolylphenylalanylserylaspartylproly lleucylalanylaspartylglycylprolylthreonylisoleucylglutaminylaspfragi nylalanylthreonylleucylarginylalanylphenylalanylalanylalanylglycylv alylthreonylprolylalanylglutaminylcysteinylphenylalanylglutamylmet hionylleucylalanylleucylisoleucylarginylglutaminyllysylhistidylproly lthreonylisoleucylprolylisoleucylglycylleucylleucylmethionyltyrosyla lanylasparaginylleucylvalylphenylalanylasparaginyllysylglycylisoleuc ylaspartylglutamylphenylalanyltyrosylalanylglutaminylcysteinylgluta myllysylvalylglycylvalylaspartylserylvalylleucylvalylalanylaspartyl valylprolylvalylglutaminylglutamylserylalanylprolylphenylalanylarg inylglutaminylalanylalanylleucylarginylhistidylasparaginylvalylal anylprolylisoleucylphenylalanylisoleucylcysteinylprolylprolylasp artylalanylaspartylaspartylaspartylleucylleucylarginylglutami nylisoleucylalanylseryltyrosylglycylarginylglycyltyrosylthreonylt yrosylleucylleucylserylarginylalanylglycylvalylthreonylglycylalany lglutamylasparaginylarginylalanylalanylleucylprolylleucylaspa raginylhistidylleucylvalylalanyllysylleucyllysylglutamyltyrosylaspar aginylalanylalanylprolylprolylleucylglutaminylglycylphenylalanylg lycylisoleucylserylalanylprolylaspartylglutaminylvalyllysylalanylal anylisoleucylaspartylalanylglycylalanylalanylglycylalanylisoleucylse rylglycylserylalanylisoleucylvalyllysylisoleucylisoleucylglutamylglu taminylhistidylasparaginylisoleucylglutamylprolylglutamyllysylmeth ionylleucylalanylalanylleucyllysylvalylphenylalanylvalylglutaminylpr olylmethionyllysylalanylalanylthreonylarginylserine",
            "bad",
            "god",
            "oh",
            "ball",
            "class",
            "lunch",
            "shiiii",
            "quiet",
            "hasjtag",
            "volcano",
            "teacher",
            "touchscreen",
            "iphone",
            "samsung",
            "clock",
            "salt",
            "pepper",
            "meat",
            "crazy",
            "sleepy",
            "freedom",
            "kangaroo",
            "eye",
            "projector",
            "cplus",
            "selfie",
            "croos",
            "nike",
            "magazine",
            "hp",
            "emergency",
            "mom",
            "china",
            "kimjungun",
            "confucius",
            "donald trump"];

function guess(Alphabet){
  
  //alert(Alphabet);
  
  var wordHtml = "";
  
  for(var i = 0; i < word.length; i++){
    if(Alphabet == word.charAt(i)){
          wordHtml = wordHtml +  "<img src='images/" + Alphabet + ".png' style='padding-right:10px;' />"   
       }
    else{ 
      wordHtml = wordHtml +  "<img src='images/baseline.png' style='padding-right:10px;' />";
    }
 
  }
  document.getElementById("line").innerHTML=wordHtml;
}

function getRandomNum(max, min){
  return Math.floor((Math.random()*max)+min);
}

function pickWord(){
  
  var num = getRandomNum(words.length, 0);
  
  word = words[num];

  for(var i = 0; i<word.length; i++){
    
    var lineHTML = document.getElementById("line").innerHTML;
    
    document.getElementById("line").innerHTML=lineHTML + "<img src='images/baseline.png' style='padding-right:10px;' />";
    
  }   
}

