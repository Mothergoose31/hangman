// input box 1  comes out as a string 
var wordToGuess = [];
// input box 2 for the guesses 

var str2= [];

var guessedLetters = [];
var numberOfGuesses =  10;
var remainingGuess = 0 ;
var isItDone = false ;
var boxvalue;
var boxvalue2;
//get the value from the guessed word 
function getText() {
    boxvalue = document.getElementById('box').value;
    wordToGuess.push(boxvalue);
    var arr2 = wordToGuess.join();
    var arr3 = [...arr2];
    console.log(arr3);
    return false;
    }

 // get value of guessed letter 
    function getChar() {

    boxvalue2= document.getElementById('box2').value;
        str2.push(Bvalue);
        
        var arr4 =str2.join();
        var arr5 = [...arr4];
        console.log(arr5);
        return false;
    }
    //evaluate guess to the  wordvalue
    
function evaluateGuess(e) {
    //loop through array with word

    
    
    }


// if the value is in the value of Guess 
//push the value to the corresponding location 
//check if  game has been won 
//if game has been won  send a message that they won 
//reset the game board 

//if the value isn't correct  push to  letters that are incorrect
// update how many guesses are left 

//


