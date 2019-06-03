// input box 1  comes out as a string 
var str1 = [];
// input box 2 for the guesses 

var str2= [];






// number of guesses 
var numberOfGuesses =  10;
var remainingGuess = 0 ;
var isItDone = false ;


 // get the guesses by letter 
    function getChar() {
    Bvalue = document.getElementById('box2').value;
    str2.push(Bvalue);
    var arr4 =str2.join();
    var arr5 = [...arr4];
   
   console.log(arr5);
   return false;
}     
        var listen = document.getElementById('bt1').addEventListener('click',function(){
           if (JSON.stringify(arr5)=== JSON.stringify(arr3)) {
               alert("You solved hangman");
            } // Same as arr1.equals(arr2) 
                 
        else {
            alert("Its not the same try again")
        } 
        });   
                     // a  function to evalutate the char that was inputed and then  moving it to the right position
                      
                   // so that when you check both arrays   you can check for equality.
        function evaluateGuess(letter) {
           // Array to store positions of letters in string
           var positions = [];
       
           // Loop through word finding all instances of guessed letter, store the indicies in an array.
           for (var i = 0; i < arr1.length; i++) {
               if(arr1[i] === letter) {
                   positions.push(i);
               }
           }
function resetGame() {
   




    
    // Show display
    updateDisplay();


//  Updates the display on the HTML Page
function updateDisplay() {

    document.getElementById("totalWins").innerText = wins;

    // Display how much of the word we've already guessed on screen.
    // Printing the array would add commas (,) - so we concatenate a string from each value in the array.
    var guessingWordText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        guessingWordText += guessingWord[i];
    }

    //
    
};




// This function takes a letter and finds all instances of 
// appearance in the string and replaces them in the guess word.
function evaluateGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];

    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    
        }
    }

    // if there are no indicies, remove a guess and update the hangman image
    
        // Loop through all the indicies and replace the '_' with a letter.
        
        }
    }
};
// Checks for a win by seeing if there are any remaining underscores in the guessingword we are building.
function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
      
        hasFinished = true;
    }
};


// Checks for a loss
function checkLoss()
{
    if(remainingGuesses <= 0) {
        
        hasFinished = true;
    }
}

// Makes a guess
function makeGuess(letter) {
    if (remainingGuesses > 0) {
        // Make sure we didn't use this letter yet
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    
};


// Event listener
document.onkeydown = function(event) {
    // If we finished a game, dump one keystroke and reset.
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        // Check to make sure a-z was pressed.
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            keySound.play();
            makeGuess(event.key.toUpperCase());
            updateDisplay();
            checkWin();
            checkLoss();
        }
    }
};
    


   // get text from first input box 
function getText() {
  boxvalue = document.getElementById('box').value;
  str1.push(boxvalue);
  var arr2 = str1.join();
  var arr3 = [...arr2];
  console.log(arr3);
  return false;
}

    //CREATE ALL EVENT LISTENERS 
        
            
                
                } else {
                    // Loop through all the indicies and replace the '_' with a letter.
                    for(var i = 0; i < positions.length; i++) {
                        guessingWord[positions[i]] = letter;
                    }
                }
     

    //       //CREATE ALL EVENT LISTENERS 
    //       document.getElementById("submit2").addEventListener("click", function(){