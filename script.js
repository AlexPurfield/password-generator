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
    var userCharsLenth = prompt ("How many characters would you like your passworkd to contain?");
    //console.log (userCharsLenth); //users input on length - numeric value 

    var specialCharacters = confirm ("Click ok to confirm special characters");
    //console.log (specialCharacters); //users input on whether they want special characters- boolean value

    var numericCharacters = confirm ("Click ok to confirm numeric characters");
    //console.log (numericCharacters); //users input on whether they want numbers- boolean value
    
    var lowercaseCharacters = confirm ("Click ok to confirm lowercase characters");
    //console.log (lowercaseCharacters); //users input on whether they want lowercase- boolean value

    var uppercaseCharacters = confirm ("Click ok to confirm uppercase characters");
    //console.log (uppercaseCharacters); // users input on whether they want uppercase- boolean value

    //create object for user options
    var userOptions = {
        length: userCharsLenth, 
        willHaveSpecialChars: specialCharacters,
        willHaveNumericChars: numericCharacters,
        willHaveLowerChars: lowercaseCharacters,
        willHaveUpperChars: uppercaseCharacters,
    };

    if (userOptions.willHaveSpecialChars===true) {
        //randomly grab member from the special characters array
        //push into results array 
        var specChar = Math.floor(Math.random() * specialChars.length);
        var specChoice = specialChars[specChar]; 
        console.log(specChoice);
    }

    if (userOptions.willHaveNumericChars===true) {
    var NumChar = Math.floor(Math.random() * numericChars.length);
    var NumChoice = numericChars[NumChar];
    console.log(NumChoice);

    }

    if (userOptions.willHaveLowerChars===true) {
        var LowChar = Math.floor(Math.random() * lowerCaseChars.length);
        var LowChoice = lowerCaseChars[LowChar];
        console.log (LowChoice);

    }

    if (userOptions.willHaveUpperChars===true) {
        var UppChar = Math.floor(Math.random() * upperCaseChars.length);
        var UppChoice = upperCaseChars[UppChar];
        console.log(UppChoice); 

    }
//eventually this array below will store the4 random generated password. will use push methodr to add to this array and this is what will return to user
    var result = [specChoice, NumChoice , LowChoice, UppChoice ];
    console.log (result);

} 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //storing a reference to the textarea element

  passwordText.value = password; //displays generated password to user 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);      