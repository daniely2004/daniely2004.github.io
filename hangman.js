var word = ""; //is the chosen word to guess
var letters_guessed = []; //holds the guesses or letters the player makes
var word_letters = []; //holds the html for each letter
var guessed_correct = []; //holds 0 or 1 if letter is guessed correctly
var hangman_pics= ["images/Hangman(1).png",
									 "images/Hangman(2).png",
									 "images/Hangman(3).png",
									 "images/Hangman(4).png",
									 "images/hangman(5).png",
									 "images/hangman(6).png",
									 "images/hangman(7).png",]

function startGame(){
  document.getElementById("line").innerHTML="";
	pickWord();
  
  //alert(word);
  
}

function guess(Alphabet){
	
  //alert(Alphabet);
  
  letters_guessed.push(Alphabet);
  
	var inList = true;
	
  var wordHtml = "";
	
	 for(var k = 0; j < letters_guessed.length; k++){
		 	if(letters_guessed[k] == Alphbet){
			
			}
	 }
  
  //goes through the guesses to either draw letter or draw blank
  for(var j = 0; j < letters_guessed.length; j++){
  
	  for(var i = 0; i < word.length; i++){
		  if(letters_guessed[j] == word.charAt(i)){
		  	  
			word_letters[i] = "<img src='images/" + letters_guessed[j] + ".png' style='padding-right:10px;' />";
			guessed_correct[i] = 1;
		  }
		  else{
		  	  
		  	  if(guessed_correct[i] != 1){
		  	  	 word_letters[i] =  "<img src='images/baseline.png' style='padding-right:10px;' />";  
		  	  }
		  }
	  }
	  
  	}
 
		
  //makes the html of the guessed letters for the word
  for(var k = 0; k < word_letters.length; k++){
  	  wordHtml = wordHtml + word_letters[k];
  }
  document.getElementById("line").innerHTML=wordHtml;
	
	if(inList == false){
		//put hangman pic list here
	}
  
}

function pickWord(){
  
  var num = getRandomNum(words.length, 0);
	
  word = words[num];
  
  for(var i = 0; i<word.length; i++){
    
    var lineHTML = document.getElementById("line").innerHTML;
    
    document.getElementById("line").innerHTML=lineHTML + "<img src='images/baseline.png' style='padding-right:10px;' />";
    
  }   
  
    word_letters = Array(word.length);
    guessed_correct = Array(word.length);
}



function getRandomNum(max, min){
  return Math.floor((Math.random()*max)+min);
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
         		"bad",
            "god",
            "oh",
            "ball",
            "class",
            "lunch",
            "shiiii",
            "quiet",
            "hashtag",
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
