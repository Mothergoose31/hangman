//varriable declarTIONS
var str1 =[];

var str2= [];
// HTML ELEMENT REFERANCES


function getText() {
  boxvalue = document.getElementById('box').value;
  str1.push(boxvalue);
    var arr2 = str1.join();
    var arr3 = [...arr2];
  console.log(arr3);
  return false;
}

    //CREATE ALL EVENT LISTENERS 
    
     function getChar() {
         Bvalue = document.getElementById('box2').value;
        str2.push(Bvalue);
        var arr4 =str2.join();
        var arr5 = [...arr4];
        console.log(arr5);
        return false;
     }     
             var listen = document.getElementById('bt1').addEventListener('click',function(){
                if (str1 = str2){
                    alert("You solved hangman");
                 } // Same as arr1.equals(arr2) 
                      
             else {
                 alert("Its not the same try again")
             }
             });
     
     

    //       //CREATE ALL EVENT LISTENERS 
    //       document.getElementById("submit2").addEventListener("click", function(){