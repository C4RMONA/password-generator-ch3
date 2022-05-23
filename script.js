// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericValue = "0123456789";
const specialCharacters = "!@#$%^&*()~}|{`_]\[>=<:;/.-,+";
var passwordLength = "";
var lowercase = "";
var uppercase = "";
var numeric = "";
var characters = "";


// Write password to the #password input
function generatePassword() {
  passwordLength = parseInt(window.prompt("Please choose a password length between 8 and 128."));
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid option, please try again");
    return "Please click Generate Password to try again.";
  } 

  var possibleChoices = "";
  lowercase = window.confirm("would you like to include lowercase letters?");
  if (lowercase){
    possibleChoices += lowercaseAlphabet;
  }
  
  uppercase = window.confirm("would you like to include uppercase letters?");
   if (uppercase){
     possibleChoices += uppercaseAlphabet;
   }

   numeric = window.confirm("would you like to include numeric letters?");
   if (numeric) {
     possibleChoices += numericValue;
   }

   characters = window.confirm("would you like to include special characters?"); 
   if (characters) {
     possibleChoices += specialCharacters;
   }
   var password = [];
 console.log(passwordLength)
   for(var i = 0; i < passwordLength; i++) {
     password.push(possibleChoices[Math.floor(Math.random() * possibleChoices.length)])
    }
    console.log(password);
    var passwordString = password.join("");
    window.alert("Your password is " + passwordString);
    return passwordString;
}

function writePassword() {

 var password = generatePassword();
 var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
