function startGame(){
  pickWord();
}

function guess(Alphabet){
  alert(Alphabet);
}

function pickWord(){
  
  var word = "supercalifornia";
  
  for(var i = 0; i<word.length; i++){
    
    var lineHTML = document.getElementById("line").innerHTML;
    
    document.getElementById("line").innerHTML=lineHTML + "<img src='images/baseline.png' style='padding-right:10px;' />";
    
  }   
}

var word = ["dog", 
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
            "donald trump"]
