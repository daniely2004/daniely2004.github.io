var word = ""; //is the chosen word to guess
var letters_guessed = []; //holds the guesses or letters the player makes
var word_letters = []; //holds the html for each letter
var guessed_correct = []; //holds 0 or 1 if letter is guessed correctly
var hangman_index = 1; //index of hangman pic if guess is wrong
var hangman_pics = ["images/Hangman (1).png",
									 "images/Hangman2.png",
									 "images/Hangman (3).png",
									 "images/Hangman (4).png",
									 "images/Hangman (5).png",
									 "images/Hangman (6).png",
									 "images/Hangman (7).png",];

function startGame(){
	document.getElementById("line").innerHTML="";
	pickWord();
  
  //alert(word);
  
}

function guess(Alphabet){
	
  //alert(Alphabet);
  
  letters_guessed.push(Alphabet);
  
  var inList = false;
  
  var wordHtml = "";
	var winner = true;
  
  //goes through the guesses to either draw letter or draw blank
  for(var j = 0; j < letters_guessed.length; j++){
  
	  for(var i = 0; i < word.length; i++){
		  if(letters_guessed[j] == word.charAt(i)){

					word_letters[i] = "<img src='images/" + letters_guessed[j] + ".png' style='padding-right:10px;' />";
					guessed_correct[i] = 1;


					if(letters_guessed[j] == Alphabet){
						inList = true;	
					}
				}
				else{

						if(guessed_correct[i] != 1){
							winner = false;
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
  
  if(inList === false){
  	  //put hangman pic list here
                   ["images/Hangman (1).png",
									 "images/Hangman2.png",
									 "images/Hangman (3).png",
									 "images/Hangman (4).png",
									 "images/Hangman (5).png",
									 "images/Hangman (6).png",
									 "images/Hangman (7).png",];
			var getHangman = hangman_pics[hangman_index++];
			document.getElementById("hangmanPic").innerHTML="<img src='" 
				+ getHangman + "' />";
		
		if(hangman_index == 7){
			alert("You lose!");
		}
  }
	
		if(winner){
		setTimeout(function(){alert("You win!");}, 1000);
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