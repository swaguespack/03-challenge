// Assignment Code
var generateBtn = document.querySelector("#generate");

// Criteria variables for user input
//var userPasswordLength;
//var userLowercase;
//var userUppercase;
//var userNumeric;
//var userSpecialCharacter;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate password function
function generatePassword(){

//Input password length
userPasswordLength = prompt("Please use a numeric value to choose a password length between 8 and 128 characters.");

//Alert if input is false, not numeric, or not between 8-128 and reopen prompt for user input
  if(!userPasswordLength || userPasswordLength <8 || userPasswordLength >128 || isNaN(userPasswordLength)){
    alert("Please input a numeric value between 8 and 128."); 
    generatePassword();
  } 

else { 
  //Only log password length in console if value is true and numeric input between 8-128
  console.log(`Password Length: ${userPasswordLength}`);

  //Confirm lowercase
  userLowercase = confirm("Will the password contain a lowercase letter?");
  console.log(`Contains Lowercase:${userLowercase}`);

  //Confirm uppercase
  userUppercase = confirm("Will the password contain an uppercase letter?");
  console.log(`Contains Uppercase:${userUppercase}`);

  //Confirm numeric
  userNumeric = confirm("Will the password contain a number?");
  console.log(`Contains Number:${userNumeric}`);
  
  //Confirm special character
  userSpecialCharacter = confirm("Will the password contain a special character?");
  console.log(`Contains Special Character:${userSpecialCharacter}`);
  }

//Result if no character criteria selected
 if (!userLowercase && !userUppercase && userNumeric && userSpecialCharacter){
  userInput = alert("Please choose a criteria.");
 }

};






