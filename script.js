// VARIABLE DECLERATIONS

var specialChars=["%" , "!" , "&"];
var numericChars=["1" , "2" , "3"];
var upperCaseChars=["A" , "B" , "C"];
var lowerCaseChars=["a" , "b" , "c"];

//a prompt for how many characters they want 

var generateBtn = document.querySelector("#generate"); //STORING A REFERENCE TO THE BUTTON GENERATE 


//FUNTIONS
// Write password to the #password input

function generatePassword() {
    var userCharsLength = prompt ("How many characters would you like your passworkd to contain?");  
    if (userCharsLength < 8 || userCharsLength > 128) {
        alert("please enter number between 8 and 128 "); console.log(userCharsLength);
    } //else { return userLengthValue;}
    //console.log (userCharsLength);
    //users input on length - numeric value 

    var specialCharacters = confirm ("Click ok to confirm special characters"); {}
    console.log (specialCharacters);
    //users input on whether they want special characters- boolean value

    var numericCharacters = confirm ("Click ok to confirm numeric characters");
    console.log (numericCharacters); //users input on whether they want numbers- boolean value
    
    var lowercaseCharacters = confirm ("Click ok to confirm lowercase characters");
    console.log (lowercaseCharacters); //users input on whether they want lowercase- boolean value

    var uppercaseCharacters = confirm ("Click ok to confirm uppercase characters");
    console.log (uppercaseCharacters); // users input on whether they want uppercase- boolean value

    //create object for user options
    var userOptions = {
        length: userCharsLength, 
        willHaveSpecialChars: specialCharacters,
        willHaveNumericChars: numericCharacters,
        willHaveLowerChars: lowercaseCharacters,
        willHaveUpperChars: uppercaseCharacters,
    }; 
    var userOptionsArray = [];
    if (userOptions.willHaveSpecialChars) {
        userOptionsArray = userOptionsArray.concat(specialChars);
    }   
    if (userOptions.willHaveNumericChars) {
        userOptionsArray=userOptionsArray.concat(numericChars);
    }
    if (userOptions.willHaveLowerChars) {
        userOptionsArray=userOptionsArray.concat(lowerCaseChars);
    }
    if (userOptions.willHaveUpperChars) {
        userOptionsArray=userOptionsArray.concat(upperCaseChars);
    }
   
    
    for (var i = 0; i < userOptions.length; i++) {
        //var combineRandom = Math.floor(Math.random() * userOptions.length);
         var randomChoose = Math.floor(Math.random() * userOptionsArray.length);
         var randomChooseFin = userOptionsArray[randomChoose]; console.log (randomChooseFin);
         window.alert("Your random password is " + randomChooseFin + ".");
}}
    
//eventually this array below will store the random generated password. will use push method to add to this array and this is what will return to user



//function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //storing a reference to the textarea element
//console.log (passwordText);


 // passwordText.value = password; //displays generated password to user 

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);     